import React from 'react';
import './style.css';


const Footer = () => {
    const logo = require('../../images/logo.png');
    
    return (
          <footer> 
            <span id="footer">
                <div class="card text-center">
                {/* <div class="card-body">       
                </div> */}
                    {/* <p class="card-text">Social link icons to be added here
                    </p> */}
                     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            <div class="card-footer text-muted">
            <img class="navbar-brand navbar-logo" href="#" src={logo} alt="Write and Watch Logo" />
            © 2022 Copyright: Write and Watch Academy 
            </div>
            </div> 
        </span> 

      </footer> 
      
    ) 
}

export default Footer;


