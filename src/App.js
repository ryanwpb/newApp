import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Typekit from 'react-typekit';
import Navbar from './components/toolBar/toolBar.js';
import SideNav from './components/sideNav/sideNav.js';
import Overlay from './components/overlay/overlay.js';
import About from './about.js';
import Work from './work.js';
import SimpleSlider from './slider.js';
import Skills from './skills.js';
import Contact from './contact.js';
import Footer from './footer.js';


class App extends Component {
    state = {
        sideNavOpen: false
    };
    
    toggleCLickHandler = () => {
        this.setState((prevState) => {
            return {sideNavOpen: !prevState.sideNavOpen}
        });
    };

   appClickHandler = () => {
      this.setState({sideNavOpen: false}) 
   };
    
  render() {
      let sideNav;
      if(this.state.sideNavOpen) {
          sideNav = <SideNav />;
         };
      
      
    return (
    <Router>
      <div className="App" style={{height: '100%'}} >
        <Navbar sideNavClickHandler={this.toggleCLickHandler}/>
        {sideNav}
        <SimpleSlider />
        <About />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;

