import React, { Component } from 'react';
import htmlImg from './assets/images/html-img.png';
import cssImg from './assets/images/css-image.png';
import reactImg from './assets/images/reactJs-img.png';


class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <div className="skillBox">
        <img src={htmlImg} width="" alt="HTML screen shot"/>
          <h3>HTML</h3>
         <p>Shortdescription to go here.</p>
          <span>Read more</span>
        </div>
         <div className="skillBox">
         <img src={cssImg} width="" alt="CSS screen shot"/>
          <h3>CSS</h3>
         <p>Shortdescription to go here.</p>
         <span>Read more</span>
        </div>
         <div className="skillBox">
        <img src={reactImg} width="" alt="ReactJs screen shot"/>
          <h3>ReactJS</h3>
         <p>Shortdescription to go here.</p>
         <span>Read more</span>
        </div>
      </section>
   
    );
  }
}

export default Skills;