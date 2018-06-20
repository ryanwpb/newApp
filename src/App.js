import React, { Component } from 'react';
import './App.css';
import TopNav from './header.js';
import About from './about.js';
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;

