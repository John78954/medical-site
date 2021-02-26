import React, { Component } from 'react';
import Navigation from '../components/Navigation.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Footer from '../components/Footer.jsx';
import List from '../components/List.jsx';
import ApplicationTwo from '../components/ApplicationTwo.jsx';

class Appointments extends Component {
    render() {
      return (
        <div className="Appointments">
          <Navigation />
          <Jumbotron />
          <List />
          <ApplicationTwo />
          <Footer />
        </div>
      ) 
    }
  }

export default Appointments;