import React from 'react';
import qs from 'qs';

import UserHistoryList from '../components/UserHistoryList';
import ErrorBoundary from './ErrorBoundary';

class UserHistory extends React.Component {

    constructor() {
        super() /*calls constructor of Component*/
        this.state = {
          userHistory: {},
        }
    }
  
    componentDidMount() {
        //parse query string

      fetch('http://localhost:8080/api/users/history',{
        method: 'GET'
      })
      .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${ response.status }`);
        }
          return response.json();
      })
      .then(user => {
        console.log('user history response:', user);
        this.setState({ userHistory: user});
      })
    }

        //display score and rank

    render() {

        console.log("userHistory", this.state.userHistory);

        return Object.keys(this.state.userHistory).length === 0 ?
        <h1>No available history</h1> :
        (
            <div>
                <ErrorBoundary>
                    <UserHistoryList games={this.state.userHistory.games}/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default UserHistory;