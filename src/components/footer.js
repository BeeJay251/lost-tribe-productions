import React, { Component } from "react";
import { NavLink } from "react-router-dom";

 
export default class FooterContainer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="links-footer">                 
                    <div className="NavLink"><NavLink exact to="./">HOME</NavLink></div>
                    <div className="NavLink"><NavLink exact to="./about">ABOUT US</NavLink></div>
                    <div className="NavLink"><NavLink exact to="./contact">CONTACT</NavLink></div>
                </div>
            </div>
        )
    }
}

