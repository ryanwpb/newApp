import React, { Component } from 'react';
import tiyLogo from './assets/images/tiy-logo.png';
import vLogo from './assets/images/vitacost-logo.png';


class Work extends Component {
  render() {
    return (
    <section>
        <div className="title">
          <h2>Work</h2>
        </div>
        <div className="titleDesc">
         <p>this my description paragraph.</p>
        </div>
      <div id="work-logos">
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