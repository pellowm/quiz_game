import { Outlet, Link } from "react-router-dom";
import React from 'react';


const Layout = () => {
  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-dark " style={{"backgroundColor": "rgba(19, 125, 212, 0.7)"}}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active" >
              <Link  className="nav-link" to="/">Home</Link >
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/users/history">Scoreboard</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/games/history">Previous Games</Link>
          </li>

        </ul>
      </div>
      <div className="navbar-nav navbar-right mr auto">
          <ul className="navbar-nav navbar-right mrauto">
            <li className="nav-item">
              <Link  className="nav-link" to="/login">Log In</Link >
            </li>
          </ul>
        </div>
    </nav>
    <Outlet />
    </>
  )
};

export default Layout;