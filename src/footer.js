import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import resume from './assets/documents/Ryan_Graham_Fl.pdf';

class Footer extends Component {
    render() {
        return (
        <section id="footer">
            <div className="footer-container">
              <div className="footer-logo">
                <h2>Ryan Graham</h2>
              </div>
              <div className="footer-contact">
              <h3>Contact</h3>
               <div className="contact-phone">
                 <i className="icon ion-md-call"></i> 
                 <a href="tel:1-561-379-9560">(561) 379-9560</a>
               </div>
               <i className="icon ion-md-mail"></i>
               <a href="mailto:ryangrahamwpb@gmail.com?Subject=Hey%20there" target="_top">ryangrahamwpb@gmail.com</a>
              </div>
              <div className="footer-social">
                <h3>Social Media</h3>
                <a href="https://github.com/ryanwpb">
                  <i className="icon ion-logo-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ryan-graham-4b25b4105/">
                  <i className="icon ion-logo-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/ryan.graham.771282">
                  <i className="icon ion-logo-facebook"></i>
                </a>
                <a href="https://www.instagram.com/ry.grahamm/">
                  <i className="icon ion-logo-instagram"></i>
                </a>
              </div>
            </div>
        </section>
        )
    }
}

export default Footer;