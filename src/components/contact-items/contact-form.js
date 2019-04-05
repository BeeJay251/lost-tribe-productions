import React, { Component } from 'react';

import '../../style/contact-form.scss';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      message: ''
    }
  }

  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }



  render() {
    return (
      <div className="Contact-Form">
    <div className="Contact-Info">
      
        
      <h2>The Spot</h2>
      
      <div className="phone">
        (251) 333 9999
      </div>
    
      <div className="address">
        123 not your momma's house<br />
        Daphne Al, 36526
      </div>
      </div>
      < br/>
      
      
        <div>
          <form action="#">
            <label>Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="Full Name" 
              value={this.state.fullname}
              onChange={e => this.setState({ fullname: e.target.value })}
            />
        
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Email" 
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
        
            <label>Message</label>
            <textarea id="subject" name="subject" placeholder="Your message"
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            ></textarea>

            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
          </form>
        </div>

      </div>
    );
  }
}



