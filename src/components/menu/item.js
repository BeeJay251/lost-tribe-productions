<<<<<<< HEAD
import React, {Component} from 'react';

export default class ItemMenuPage extends Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <div className = "menuItem">
                <h4>{this.props.flavor}</h4>
                <img src={this.props.arg} className = "menuImage"/> 
                <div className = "imageInfo">
                    <div className = "content">
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
=======
import React, {Component} from 'react';

export default class ItemMenuPage extends Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <div className = "menuItem">
                <h4>{this.props.flavor}</h4>
                <img src={this.props.arg} className = "menuImage"/> 
                <div className = "imageInfo">
                    <div className = "content">
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
>>>>>>> 5bec8e0745cd7161fa4b3b39e8a5e26ff3325e01
}