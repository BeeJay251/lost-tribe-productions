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
}