import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Appointments from './pages/Appointments.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/contact" component={Contact}/>
         <Route path="/appointments" component={Appointments}/>
      </div>
      </Router>
    )
  }
}

export default App;
