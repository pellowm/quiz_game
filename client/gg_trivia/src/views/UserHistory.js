import React from 'react';

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

      fetch('/api/users/history',{
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

        return (
            <div>
                 <ErrorBoundary>
                 <div className="container-fluid m-4 champions text-center">
                   <div className="row">
                     <div className="col-md-3 col-sm-12"/> 
                     <div className="col-md-6 col-sm-12 rounded-3 p-3 active-area">  
                        <h1 className="">{`Your Game History`}:</h1>
                          { Object.keys(this.state.userHistory).length === 0 ?
                          <></> :
                          <UserHistoryList games={this.state.userHistory.games}/>}
                      </div>
                      <div className="col-md-3 col-sm-12"/> 
                      </div>
                    </div>
                </ErrorBoundary>
            </div>
        );
    }
}

export default UserHistory;