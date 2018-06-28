import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Logo from './assets/images/logo.png';


class TopNav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <h2>Ryan Graham</h2>
        </div>
         <ul>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Work</Link></li>
          <li><Link to="#">Skills</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
        <div className="mobileMenu">
          <i class="icon ion-md-menu"></i>
        </div>
      </div>
    );
  }
}

export default TopNav;