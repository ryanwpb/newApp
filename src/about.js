import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="title">
          <h2>Hi there, I'm Ryan</h2>
        </div>
        <div className="titleDesc">
         <p>You can usually catch me coding or enjoying a beer at my favorite dive bar.</p>
        </div>
        <div className="col">
          <div className="col col-left">
           <p className="p1"><span className="s1">As a Web Developer, I come up with ideas & concepts that help you drive business. I’ve been in the business for over 3 years and can tackle everything from single page web applications to new site builds. I adapt my style to suit every job and have worked for some really amazing companies.</span></p>
         </div>
        <div className="col col-right">
          <p className="p1"><span className="s1">Javascript, JQuery, CSS, HTML, React.js are my jam!
           I studied Back End development in Durham, NC at The Iron Yard. A three month immersive coding bootcamp designed to give you (me) the necessary tools to get a great job in tech. I am also a lover of music, sky diving and anything dealing with Adidas Deerupt Shoes.</span></p>
         </div>
        </div>
      </section>
    );
  }
}

export default About;