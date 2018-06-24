import React, { Component } from 'react';

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
                            
              </div>
              <div className="footer-social">
                <h3>Social Media</h3>
                <i class="icon ion-logo-github"></i>
                <i class="icon ion-logo-linkedin"></i>
                <i class="icon ion-logo-facebook"></i>
                <i class="icon ion-logo-instagram"></i>
              </div>
            </div>
            
        </section>
        )
    }
}

export default Footer;