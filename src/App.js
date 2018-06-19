import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './header.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my app</h1>
        </header>
        <TopNav />
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

