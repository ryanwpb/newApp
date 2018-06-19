import React, { Component } from 'react';
import './App.css';
import './header.js';
import Footer from './footer.js';




class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Footer />
      </div>
    );
  }
}

class TopNav extends Component {
  render() {
    return (
      <div className="nav">
         <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    );
  }
}


export default App;

