<<<<<<< HEAD
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

=======
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

>>>>>>> 5bec8e0745cd7161fa4b3b39e8a5e26ff3325e01
