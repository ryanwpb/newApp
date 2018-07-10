import React, { Component } from 'react';
import htmlImg from './assets/images/html-img.png';
import cssImg from './assets/images/css-image.png';
import htmlimg from './assets/images/html-img.png';
import reactImg from './assets/images/reactJs-img.png';
import jqueryImg from './assets/images/jQuery-img.png';
import scassImg from './assets/images/scass.png';
import javascript from './assets/images/JavaScript.png';

class Skills extends Component {
  render() {
    return (
     <div id="skillset">
        <div className="title">
          <h2>Skills</h2>
        </div>
        <div className="titleDesc">
         <p>Over the the last 3 years I have tought myself the Basics & not-so basic of Front End development. Below are some skills I have aquired during that time. <span className="red-span">So what can I do for you?</span></p>
        </div>
      <section id="skills">
        <div className="skillBox">
        <img src={htmlimg} width="" alt="HTML code screen shot"/>
          <h3>HTML</h3>
          <p>Hypertext Markup Language is the standard markup language for creating web pages and web applications.</p>
        </div>
         <div className="skillBox">
         <img src={cssImg} width="" alt="CSS code screen shot"/>
          <h3>CSS</h3>
         <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document.</p>
        </div>
         <div className="skillBox">
        <img src={reactImg} width="" alt="ReactJs code screen shot"/>
          <h3>ReactJS</h3>
         <p>React can be used as a base in the development of single-page or mobile applications.</p>
        </div>
        <div className="skillBox">
        <img src={jqueryImg} width="" alt="jquery code screen shot"/>
          <h3>JQuery</h3>
         <p>jQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations & handle events.</p>
        </div>
        <div className="skillBox">
        <img src={scassImg} width="" alt="scass code screen shot"/>
          <h3>SASS</h3>
         <p>Sass is completely compatible with all versions of CSS. Sass boasts more features & abilities then any other CSS extension.</p>
        </div>
         <div className="skillBox">
        <img src={javascript} width="" alt="javaScript code screen shot"/>
          <h3>JavaScript</h3>
         <p>One of the three core technologies of Web Developers. JavaScript makes web pages and web applications interactive.</p>
        </div>
      </section>
    </div>
   
    );
  }
}

export default Skills;