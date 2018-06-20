import React, { Component } from 'react';
import Logo from './assets/images/logo.png';


class TopNav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <img src={Logo} width="300" className="logoImage"/>
        </div>
         <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default TopNav;