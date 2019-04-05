import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from "./home"
import NavigationContainer from "./navigation-bar/navigation-container";
import FooterContainer from "./footer";
import About from "./pages/about";
import Contact from "./contact-items/contact-container";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

library.add(faIgloo)

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
            
          </div>
        </Router>
        <FooterContainer />            
      </div>
    );
  }
}



