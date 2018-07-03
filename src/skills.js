import React, { Component } from 'react';
import htmlImg from './assets/images/html-img.png';
import cssImg from './assets/images/css-image.png';
import htmlimg from './assets/images/html-img.png';
import reactImg from './assets/images/reactJs-img.png';
import jqueryImg from './assets/images/jquery.png';


class Skills extends Component {
  render() {
    return (
    <div>
        <div className="title">
          <h2>Skills</h2>
        </div>
        <div className="titleDesc">
         <p>Clients work with me to further their mission, reach their people and realize their goals. They look to me to combine personality, technology & creativeness in a way that garners results. <span className="red-span">So what can I do for you?</span></p>
        </div>
      <section id="skills">
        <div className="skillBox">
        <img src={htmlimg} width="" alt="HTML screen shot"/>
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
          <div className="skillBox">
        <img src={jqueryImg} width="" alt="jquery screen shot"/>
          <h3>jQuery</h3>
         <p>Shortdescription to go here.</p>
         <span>Read more</span>
        </div>
      </section>
    </div>
   
    );
  }
}

export default Skills;