import React, { Component } from 'react';
import tiyLogo from './assets/images/tiy-logo.png';
import vLogo from './assets/images/vitacost-logo.png';
import ambrosia from './assets/images/ambrosia.png';



class Work extends Component {
  render() {
    return (
    <section id="work">
        <div className="title">
          <h2>Work</h2>
        </div>
        <div className="titleDesc">
         <p>Here are a few of the companies I've had the disticnt pleasure of working for.</p>
        </div>
      <div id="work-logos">
        <div className="work-logo">
         <img src={ambrosia} width="200" alt="Ambrosia Treatment Center Logo"/>
        </div>
        <div className="work-logo">
          <img src={tiyLogo} width="" alt="The Iron Yard Logo"/>
        </div>
         <div className="work-logo">
          <img src={vLogo} width="200" alt="Vitacost Logo"/>
        </div>
      </div>
    </section>
    );
  }
}

export default Work;