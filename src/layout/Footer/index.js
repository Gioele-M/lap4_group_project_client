import React from 'react';
import './style.css';

const Footer = () => {
    const logo = require('../../images/logo.png');
    return (

        <footer>
        <span id="footer">
           
            <div class="card text-center">
                <div class="card-body">
                    <img class="navbar-brand navbar-logo" href="#" src={logo} alt="Write and Watch Logo" />
                    <p class="card-text">Social link icons to be added here
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">
                 2 days ago 
            </div>
            </div> 
        </span> 
      </footer>
    ) 
}

export default Footer;

