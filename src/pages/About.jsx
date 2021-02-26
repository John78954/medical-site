import React, { Component } from 'react';
import Navigation from '../components/Navigation.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import DescendMenu from '../components/DescendMenu.jsx';
import Footer from '../components/Footer.jsx';

class About extends Component {
    render() {
      return (
        <div className="About">
          <Navigation />
          <Jumbotron />
          <DescendMenu />
          <Footer />
        </div>
      )
    }
  }

export default About;