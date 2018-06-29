import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="title">
          <h2>Hi there, I'm Ryan</h2>
        </div>
        <div className="titleDesc">
         <p>this my description paragraph.</p>
        </div>
        <div className="col">
          <div className="col col-left">
           <p className="p1"><span className="s1">Hello. I’m Ryan Graham. I’m a Web Developer. I come up with ideas & concepts that help you drive business. I’ve been in the business for over 3 years and can tackle everything from singal page web applications to new site builds. I adapt my style to suit every job and have worked with some really amazing companies.</span></p>
         </div>
        <div className="col col-right">
          <p className="p1"><span className="s1">Therapies at A New Start for drug abuse treatment and alcohol addiction include:&nbsp;Rational Emotive Behavioral Therapy, Cognitive-Behavioral Therapy, Client-Centered Therapy, Trauma Therapy, Relapse Prevention, Family Systems Therapy, 12-Step Recovery Program, Existential Therapy, Dual Diagnosis Therapy, Solution-Focused Therapy.</span></p>
         </div>
        </div>
        
      </section>
    );
  }
}

export default About;