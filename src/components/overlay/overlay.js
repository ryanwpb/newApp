import React from 'react';
import './overlay.css';

const Overlay = props => (
  <div className="overlay" onClick={props.press}></div>
);

export default Overlay;