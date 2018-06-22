import React, { Component } from 'react';
import Logo from './assets/images/logo.png';


class TopNav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <h2>Ryan Graham</h2>
        </div>
         <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default TopNav;