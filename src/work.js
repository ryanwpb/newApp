import React, { Component } from 'react';
import tiyLogo from './assets/images/tiy-logo.png';
import vLogo from './assets/images/vitacost-logo.png';


class Work extends Component {
  render() {
    return (
      <div id="work-logos">
        <div className="logo">
          <img src={tiyLogo} width="" className="work-logo" alt="The Iron Yard Logo"/>
        </div>
         <div className="logo">
          <img src={vLogo} width="200" className="work-logo" alt="Vitacost Logo"/>
        </div>
      </div>
    );
  }
}

export default Work;