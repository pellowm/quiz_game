import React from 'react';
import qs from 'qs';

import Question from '../components/QuestionCard';
import ErrorBoundary from './ErrorBoundary';

class Game extends React.Component {

    constructor() {
        super() /*calls constructor of Component*/
        this.state = {
          questionIndex: 0,
          currentGame: {},
          guesses: []
        }
    }
  
    componentDidMount() {
        let gameRequest = {};
        //parse query string
        gameRequest.categories = [qs.parse(window.location.search, { ignoreQueryPrefix: true }).category_id];

      fetch('http://localhost:8080/games',{
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
        console.log('post game response:', game);
        this.setState({ currentGame: game});
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
        fetch(`http://localhost:8080/games/${this.state.currentGame.id}`,{
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
            this.setState({ currentGame: game});
          })
        //display score and rank

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

    /* the function that returns what shows up on the webpage */
    render() {
        console.log("Current game: ", this.state.currentGame);
        console.log("Question index:", this.state.questionIndex);

        return Object.keys(this.state.currentGame).length === 0 ?
        <h1>No available game</h1> :
        (
            <div>
                <ErrorBoundary>
                    <Question
                        {...this.state.currentGame.questions[this.state.questionIndex]}
                        guess={this.state.guesses[this.state.questionIndex]}
                        onRadioSelected={this.onRadioSelected} />
                    {this.state.questionIndex > 0 && <button onClick={this.onClickPrev}>Prev</button>}
                    {this.state.questionIndex < this.state.currentGame.questions.length-1 && <button onClick={this.onClickNext}>Next</button>}
                    {this.state.questionIndex === this.state.currentGame.questions.length-1 && <button onClick={this.onClickSubmit}>Submit</button>}
                </ErrorBoundary>
            </div>
        );
    }
}

export default Game;