import React from 'react';
import ToggleButton from '../sideNav/toggle.js'
import './toolBar.css'

const Navbar = props => (
  <header className="toolbar"> 
    <nav className="toolbar-nav">
      <div className="logo"><h2>Ryan Graham</h2></div>
      <div className="spacer"></div>
      <div className="navItems">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#skillset">Skills</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
     </div>
      <div>
         <ToggleButton click={props.sideNavClickHandler}/>
      </div>
    </nav>
  </header>
);



export default Navbar;