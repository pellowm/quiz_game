import React from 'react';
import LeaderboardTable from '../components/LeaderboardTable';
import ErrorBoundary from './ErrorBoundary';

class Leaderboard extends React.Component {

    constructor() {
        super() /*calls constructor of Component*/
        this.state = {
          gameHistory: {},
          users: {}
        }
    }
  
    async componentDidMount() {
        //parse query string

        let getGames = async function (){
            let response = await fetch('http://localhost:8080/api/games/history',{
                method: 'GET'
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${ response.status }`);
            }
            return await response.json();
        }

        let getUsers = async function () {
            let response = await fetch('http://localhost:8080/api/users',{
                method: 'GET'
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${ response.status }`);
            }
            return await response.json();
        }

        let [games, users] = await Promise.all([getGames(), getUsers()]);

        this.setState({ gameHistory: games, "users": users});
    }

        //display score and rank

    render() {

        console.log("gameHistory", this.state.gameHistory);

        return Object.keys(this.state.gameHistory).length === 0 ?
        <h1>Loading...</h1> :
        (
            <div className="container m-4 leaderboard">
                <div className="row">
                    <div className="col-md-2 col-sm-0"/>
                    <div className="col-md-8 col-sm-12 rounded-3 p-3 active-area">
                        <ErrorBoundary>
                            <LeaderboardTable users={this.state.users} games={this.state.gameHistory}/>
                        </ErrorBoundary>
                    </div>
                    <div className="col-md-2 col-sm-0"/>
                </div>
            </div>
        );
    }
}

export default Leaderboard;