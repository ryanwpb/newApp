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
                 <Link to="tel:1-561-379-9560">(561) 379-9560</Link>
               </div>
               <i class="icon ion-md-mail"></i>
               <Link to="mailto:ryangrahamwpb@gmail.com.com?Subject=Hey%20there" target="_top">ryangrahamwpb@gmail.com</Link>
              </div>
              <div className="footer-social">
                <h3>Social Media</h3>
                <Link to="https://github.com/ryanwpb">
                  <i class="icon ion-logo-github"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/ryan-graham-4b25b4105/">
                  <i class="icon ion-logo-linkedin"></i>
                </Link>
                <Link to="https://www.facebook.com/ryan.graham.771282">
                  <i class="icon ion-logo-facebook"></i>
                </Link>
                <Link to="https://www.instagram.com/ry.grahamm/">
                  <i class="icon ion-logo-instagram"></i>
                </Link>
              </div>
            </div>
            
        </section>
        )
    }
}

export default Footer;