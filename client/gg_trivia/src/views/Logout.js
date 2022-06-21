import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Login extends React.Component {

    constructor() {
        super() /*calls constructor of Component*/
        this.state = {
          
        }
    }
  
    componentDidMount() {
   
    }

    /* the function that returns what shows up on the webpage */
    render() {
        
        return (
            <div className="container mt-5 rounded-3 text-center">
              <div className="row">
                <div className="col-md-3 col-sm-0"/>
                <div className="col-md-6 col-sm-12 rounded-3 p-3 active-area">
                  <h1>Welcome to Gilmore Girls Trivia</h1>
                  <a className="btn btn-success" href="./oauth2/authorization/auth0">Login</a>
                </div>
                <div className="col-md-3 col-sm-0"/>
              </div>
            </div>
        ); 
    }

}

  
export default Logout;