import React, { Component } from 'react';
import Navigation from '../components/Navigation.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Rowone from '../components/Rowone.jsx';
import Footer from '../components/Footer.jsx';
import Slides from '../components/Slides.jsx';

class Home extends Component {
    render() {
      return (
        <div className="Home">
          <Navigation />
          <Jumbotron />
          <Rowone />
          <Slides />
          <Footer />
        </div>
      )
    }
  }

export default Home;