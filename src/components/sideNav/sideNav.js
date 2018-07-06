import React from 'react';
import './sideNav.css';
 
const SideNav = props => {
    
 let sideClasses = 'sideNav';
    if(props.show) {
         sideClasses = 'sideNav open';
       }
 return (
  <nav className={sideClasses}>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#skillset">Skills</a></li>
      <li><a href="#footer">Contact</a></li>
    </ul>
  </nav>
  );
};

export default SideNav;