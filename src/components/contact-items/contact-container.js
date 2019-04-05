import React, { Component } from 'react';

import ContactForm from './contact-form';
import ContactItems from './contact-items';


export default class Contact extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="Contact-Container">
        <h2>Contact Us!</h2>


        <div className="Page-Elements">
          <ContactItems />
          <ContactForm />
        </div>
      
      </div>
    );
  }
}


