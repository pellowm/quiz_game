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
            You have logged out.
            </div>
        ); 
    }

}

  
export default Logout;