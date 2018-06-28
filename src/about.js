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
           <p className="p1"><span class="s1">Our IOP West Palm Beach program develops individualized drug abuse and alcohol abuse treatments for our patients utilizing individual and group therapies. The at A New Start intensive outpatient program staff has extensive knowledge and experience working with:</span></p>
         </div>
        <div className="col col-right">
          <p className="p1"><span class="s1">Therapies at A New Start for drug abuse treatment and alcohol addiction include:&nbsp;Rational Emotive Behavioral Therapy, Cognitive-Behavioral Therapy, Client-Centered Therapy, Trauma Therapy, Relapse Prevention, Family Systems Therapy, 12-Step Recovery Program, Existential Therapy, Dual Diagnosis Therapy, Solution-Focused Therapy.</span></p>
         </div>
        </div>
        
      </section>
    );
  }
}

export default About;