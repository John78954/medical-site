import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';

class Bloodtest extends Component {
    render() {
      return (
        <div className="Bloodtest">
          <Navigation />
          <Jumbotron />
          <Footer />
        </div>
      )
    }
  }

export default Bloodtest;