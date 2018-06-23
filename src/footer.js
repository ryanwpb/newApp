import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
        <section className="footer">
            <p>I am a footer.</p>
            <div className="icon-area">
              <ion-icon name="logo-github"></ion-icon>
            <i class="icon ion-md-heart"></i>
            </div>
        </section>
        )
    }
}

export default Footer;