<<<<<<< HEAD
import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class NavigationContainer extends Component {
  render() {
    return (
      <div className="nav-container">
         
          <div className="links">
              <div className="nav-link"><NavLink exact to="/">HOME</NavLink></div>

              <div className="nav-link"><NavLink exact to="/about">ABOUT US</NavLink></div>

              <div className="nav-link"><NavLink exact to="/contact">CONTACT</NavLink></div>
          </div>
          <hr />
      </div>
    );
  }
=======
import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class NavigationContainer extends Component {
  render() {
    return (
      <div className="nav-container">
         
          <div className="links">
              <div className="nav-link"><NavLink exact to="/">HOME</NavLink></div>

              <div className="nav-link"><NavLink exact to="/about">ABOUT US</NavLink></div>

              <div className="nav-link"><NavLink exact to="/contact">CONTACT</NavLink></div>
          </div>
          <hr />
      </div>
    );
  }
>>>>>>> 5bec8e0745cd7161fa4b3b39e8a5e26ff3325e01
}