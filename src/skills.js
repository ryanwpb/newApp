import React, { Component } from 'react';
import Logo from './assets/images/logo.png';


class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <div className="skillBox">
          <h3>HTML</h3>
         <p>Shortdescription to go here.</p>
          <span>Read more</span>
        </div>
         <div className="skillBox">
          <h3>CSS</h3>
         <p>Shortdescription to go here.</p>
         <span>Read more</span>
        </div>
         <div className="skillBox">
          <h3>ReactJS</h3>
         <p>Shortdescription to go here.</p>
         <span>Read more</span>
        </div>
      </section>
   
    );
  }
}

export default Skills;