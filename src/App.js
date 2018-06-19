import React, { Component } from 'react';
import './App.css';
import TopNav from './header.js';
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

export default App;

