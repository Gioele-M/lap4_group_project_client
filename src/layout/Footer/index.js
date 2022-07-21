import React from 'react';
import './style.css';


const Footer = () => {
    const logo = require('../../images/logo.png');
    
    return (
        //   <footer> 
        //     <span id="footer">
        //         <div className="card text-center">
        //         {/* <div className="card-body">       
        //         </div> */}
        //             {/* <p className="card-text">Social link icons to be added here
        //             </p> */}
        //              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        //     <div className="card-footer text-muted">
        //     <img className="navbar-brand navbar-logo" href="#" src={logo} alt="Write and Watch Logo" />
        //     © 2022 Copyright: Write and Watch Academy 
        //     </div>
        //     </div> 
        // </span> 


<span id="footer" className='card-footer text-muted text-center'>
<img className="navbar-brand navbar-logo" href="#" src={logo} alt="Write and Watch Logo" />

  &copy; 2022 Copyright: Write and Watch Academy 
  </span>


      
    ) 
}

export default Footer;


