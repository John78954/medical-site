import React, { Component } from 'react';
import Application from '../components/Application.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';

class Contact extends Component {
    render() {
      return (
        <div className="Contact">
          <Navigation />
          <Jumbotron />
          <Application />
          <Footer />
        </div>
      )
    }
  }

export default Contact;