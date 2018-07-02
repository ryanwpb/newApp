import React from 'react';
import './overlay.css';

const Overlay = props => (
  <div className="overlay" onClick={props.click}></div>
);

export default Overlay;