import React from 'react';

import LeaderboardTable from '../components/LeaderboardTable';
import ErrorBoundary from './ErrorBoundary';

let cornstarch = require('../images/cornstarch.png')
let poptart = require('../images/poptart.png')

class Leaderboard extends React.Component {

    constructor() {
        super()
        this.state = {
          games: [],
          users: []
        }
    }
  
    async componentDidMount() {

        let getGames = async function (){
            let response = await fetch('/api/games/history',{
                method: 'GET'
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${ response.status }`);
            }
            return await response.json();
        }

        let getUsers = async function () {
            let response = await fetch('/api/users',{
                method: 'GET'
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${ response.status }`);
            }
            return await response.json();
        }

        let [games, users] = await Promise.all([getGames(), getUsers()]);

        this.setState({ "games": games, "users": users});
    }

    render() {
        console.log("gameHistory", this.state.games);

        return (
            <div className="container m-4 leaderboard">
                <div className="row">
                    <div className="col-md-2 col-sm-0"/>
                    <div className="col-md-8 col-sm-12 rounded-3 p-3 active-area">
                        <div className="text-center">
                            <img alt="" src={cornstarch} />
                            <h1 className="d-inline">LEADERBOARD</h1>
                            <img alt="" src={poptart} />
                        </div>
                            { this.state.games.length === 0 ?
                            <></> :
                            <ErrorBoundary>
                                <LeaderboardTable users={this.state.users} games={this.state.games}/>
                            </ErrorBoundary> }
                    </div>
                    <div className="col-md-2 col-sm-0"/>
                </div>
            </div>
        );
    }
}

export default Leaderboard;