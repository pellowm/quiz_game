import { Outlet, Link } from "react-router-dom";
import React from 'react';
import '../index.css'



const Layout = () => {

/*   let body =   !this.state.isAuthenticated ?
              (<button href="./oauth2/authorization/auth0">Login!</button>) :
              (<Outlet />) */

  return (
    <>
      <div className="gilmore-font">
        <nav className="navbar navbar-expand-lg navbar-dark" id="navbar-background-color">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active" >
                  <Link  className="nav-link" to="/">Home</Link >
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/history">History</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav navbar-right mr auto">
              <ul className="navbar-nav navbar-right mrauto">
                <li className="nav-item">
                  <Link  className="nav-link" to="/logout">Log out</Link >
                </li>
              </ul>
            </div>
        </nav>
        <Outlet />
      </div>
    </>
  )
};

export default Layout;