import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Typekit from 'react-typekit';
import Navbar from './components/toolBar/toolBar.js';
import SideNav from './components/sideNav/sideNav.js'
import About from './about.js';
import Work from './work.js';
import SimpleSlider from './slider.js';
import Skills from './skills.js';
import Contact from './contact.js';
import Footer from './footer.js';


class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Navbar />
        <SideNav />
        <SimpleSlider />
        <About />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;

