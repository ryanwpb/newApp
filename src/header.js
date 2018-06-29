import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Logo from './assets/images/logo.png';


class TopNav extends Component {
  render() {
 const icon = document.getElementsByClassName('mobileIcon'); 
 function iconClick() {
    const menu = document.getElementsByClassName('mobileMenu'); 
    alert('Thats a click.');
  };
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
        <div className="mobileIcon">
          <i className="icon ion-md-menu" onClick={iconClick}></i>
        </div>
         <div className="mobileMenu">
        <ul>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Work</Link></li>
          <li><Link to="#">Skills</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
       </div>
      </div>
      
    );
  }
}

export default TopNav;