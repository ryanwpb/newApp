import React, { Component } from 'react';
import Slider from "react-slick";
import tiyLogo from './assets/images/tiy-logo.png';
import vLogo from './assets/images/vitacost-logo.png';
import marLogo from './assets/images/marketran-logo.jpg';
import codeCoffee from './assets/images/code-coffee.jpg';
import coding from './assets/images/coding.jpeg';
import developers from './assets/images/developers.jpg';


 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <div>
          <img src={tiyLogo}width="200" alt="Image of computer and coffee mug."/>
        </div>
        </div>
        <div>
          <img src={vLogo} width="200" alt="Developers coding"/>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;