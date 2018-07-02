import React from 'react';
import './toggle.css';

const ToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </button>
);

export default ToggleButton;