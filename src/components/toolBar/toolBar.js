import React from 'react';
import './toolBar.css'

const Navbar = props => (
  <header className="toolbar"> 
    <nav className="toolbar-nav">
      <div className="logo"><h2>Ryan Graham</h2></div>
      <div className="spacer"></div>
      <div className="navItems">
        <ul>
          <li><a>About</a></li>
          <li><a>Work</a></li>
          <li><a>Skills</a></li>
          <li><a>Contact</a></li>
        </ul>
     </div>
      <div></div>
    </nav>
  </header>
);



export default Navbar;