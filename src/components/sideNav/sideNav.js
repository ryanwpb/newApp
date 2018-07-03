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
      <li><a>About</a></li>
      <li><a>Work</a></li>
      <li><a>Skills</a></li>
      <li><a>Contact</a></li>
    </ul>
  </nav>
  );
};

export default SideNav;