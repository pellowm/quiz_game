import React from 'react';
import qs from 'qs';
import { Link } from "react-router-dom";

import Question from '../components/QuestionCard';
import RankCard from '../components/RankCard';
import ErrorBoundary from './ErrorBoundary';

class Game extends React.Component {

    constructor() {
        super()
        this.state = {
          questionIndex: 0,
          currentGame: {},
          guesses: [], 
          showSubmitButton: true,
          gameInProgress: true
        }
    }
  
    componentDidMount() {
        let gameRequest = {};
        gameRequest.categories = [qs.parse(window.location.search, { ignoreQueryPrefix: true }).category_id];

      fetch('/api/games',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameRequest)
      })
      .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${ response.status }`);
        }
          return response.json();
      })
      .then(game => {
        game.score = -1;
        console.log('post game response:', game);
        this.setState({ currentGame: game, showNewGameButton: false});
      })
    }

    onClickNext = () => {
        //need to store user choice in currentGame.guesses
        //declare array length ahead of time and write guess to array[index]?
        let nextQuestion = this.state.questionIndex + 1;
        this.setState({ questionIndex: nextQuestion })
    }

    onClickSubmit = () => {
        //need to store user choice in currentGame.guesses
        //declare array length ahead of time and write guess to array[index]?
        //fetch
        let guesses = this.state.guesses;
        fetch(`/api/games/${this.state.currentGame.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"guesses": guesses})
          })
          .then(response => {
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${ response.status }`);
              }
              return response.json();
          })
          .then(game => {
            console.log('patch game response:', game);
            this.setState({ currentGame: game, showSubmitButton: false, gameInProgress: false});
          })
    }

    onClickPrev = () => {
        //need to store user choice in currentGame.guesses
        //declare array length ahead of time and write guess to array[index]?
        let prevQuestion = this.state.questionIndex - 1;
        this.setState({ questionIndex: prevQuestion })
    }

    onRadioSelected = (event) => {
        let newGuesses = this.state.guesses.slice();
        newGuesses[this.state.questionIndex] = event.target.value;
        this.setState({guesses: newGuesses})
    }

    render() {
        console.log("Current game: ", this.state.currentGame);
        console.log("Question index:", this.state.questionIndex);

        return Object.keys(this.state.currentGame).length === 0 ?
        <h1>Loading...</h1> :
        (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3 col-sm-0"/>
                    <div className="col-md-6 col-sm-12 rounded-3 p-3 active-area">
                        <ErrorBoundary>
                            <Question
                                {...this.state.currentGame.questions[this.state.questionIndex]}
                                guess={this.state.guesses[this.state.questionIndex]}
                                onRadioSelected={this.onRadioSelected} 
                                gameInProgress={this.state.gameInProgress} />
                            <div  className="text-center">
                            <RankCard {...this.state.currentGame} />
                                {this.state.gameInProgress === true && this.state.questionIndex > 0 && <button className="btn btn-outline-success mr-3" onClick={this.onClickPrev}>Prev</button>}
                                {this.state.gameInProgress === true && this.state.questionIndex < this.state.currentGame.questions.length-1 && <button className="btn btn-outline-success" onClick={this.onClickNext}>Next</button>}
                                {this.state.gameInProgress === true && this.state.questionIndex === this.state.currentGame.questions.length-1 && this.state.showSubmitButton === true && <button onClick={this.onClickSubmit}>Submit</button>}
                                {this.state.gameInProgress === false && <Link  className="nav-link" to="/"><button type="button">New Game</button></Link>}
                            </div>
                        </ErrorBoundary>
                    </div>
                    <div className="col-md-3 col-sm-0"/>
                </div>
            </div>
        );
    }
}

export default Game;