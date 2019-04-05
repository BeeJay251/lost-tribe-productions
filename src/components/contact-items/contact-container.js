<<<<<<< HEAD
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


=======
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


>>>>>>> 5bec8e0745cd7161fa4b3b39e8a5e26ff3325e01
