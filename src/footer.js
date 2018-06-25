import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
        <section className="footer">
            <div className="footer-container">
              <div className="footer-logo">
                <h2>Ryan Graham</h2>
              </div>
              <div className="footer-contact">
              <h3>Contact</h3>
               <div className="contact-phone">
                 <i class="icon ion-md-call"></i> 
                 <a href="tel:1-561-379-9560">(561) 379-9560</a>
               </div>
               <i class="icon ion-md-mail"></i>
               <a href="mailto:ryangrahamwpb@gmail.com.com?Subject=Hey%20there" target="_top">ryangrahamwpb@gmail.com</a>
              </div>
              <div className="footer-social">
                <h3>Social Media</h3>
                <a href="https://github.com/ryanwpb">
                  <i class="icon ion-logo-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ryan-graham-4b25b4105/">
                  <i class="icon ion-logo-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/ryan.graham.771282">
                  <i class="icon ion-logo-facebook"></i>
                </a>
                <a href="https://www.instagram.com/ry.grahamm/">
                  <i class="icon ion-logo-instagram"></i>
                </a>
              </div>
            </div>
            
        </section>
        )
    }
}

export default Footer;