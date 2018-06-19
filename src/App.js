import React, { Component } from 'react';
import './App.css';
import './header.js';


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

class Footer extends Component {
    render() {
        return (
        <section className="footer">
            <p>i am a footer.</p>
        </section>
        )
    }
}

export default App;

