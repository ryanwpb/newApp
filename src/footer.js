import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
        <section className="footer">
            <p>I am a footer.</p>
            <div className="icon-area">
            <i class="icon ion-logo-github"></i>
            <i class="icon ion-logo-linkedin"></i>
            <i class="icon ion-logo-facebook"></i>
            <i class="icon ion-logo-instagram"></i>
            </div>
        </section>
        )
    }
}

export default Footer;