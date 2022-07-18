
import React, { Component } from 'react'
import "./styles.css";
import { NavLink } from 'react-router-dom';
// import Modal from '../Signup/modal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FinalAtempt from '../Signup/FinalAtempt';
import ModalLogin from '../Signup/ModalLogin';
import ModalSignup from '../Signup/ModalSignup';


export default function NavBar() {
    const logo = require('../../images/logo.png');

    const [signupModalShow, setSignupModalShow] = React.useState(false);
    const [loginModalShow, setLoginModalShow] = React.useState(false);


// wherethe modal will be displayed://///////////////////////////////
    // class Dashboard extends Component {
    //   constructor() {
    //     super();
    //     this.state = {
    //       show: false
    //     };
    //     this.showModal = this.showModal.bind(this);
    //     this.hideModal = this.hideModal.bind(this);
    //   }
    
    //   showModal = () => {
    //     this.setState({ show: true });
    //   };
    
    //   hideModal = () => {
    //     this.setState({ show: false });
    //   };
    // }

////////////////////////////////////////////


    return (
    <>





    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light  align-items-end"> */}
    <nav class="navbar navbar-custom navbar-expand-lg navbar-light bg-light pt-0 pb-0">

        {/* /////////////// */}
        {/* <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal> */}


        
{/* 
      <button type="button" onClick={this.showModal}>
          Open
      </button>  */}

        {/* /////////////////// */}

{/* LOGO */}
    <NavLink to="/">
      <img class="navbar-brand navbar-logo" href="#" src={logo} alt="Write and Watch Logo" />
    </NavLink>
       

{/* align right */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">is there anything here?    </span>
  </button>


{/* TEXT LINKS  /////////////////// */}
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02 ">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 " id=' font1'>
      <li class="nav-item active">
          <NavLink id='no-decos' to="/">
            <a class="nav-link " href="#" id=' font1'>Home</a>
          </NavLink>
      </li>
      <li class="nav-item ">
        <NavLink id='no-decos' to="/about">
          <a class="nav-link" href="#">About</a>
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink id='no-decos' to="/user">
          <a class="nav-link" href="#">Profile</a>
        </NavLink>
      </li>
      <li class="Playlists">
        <NavLink id='no-decos' to="/playlist">
          <a class="nav-link" href="#">Playlists</a>
        </NavLink>
      </li>

{/* SEARCH  /////////////////// */}
    </ul>
    <form class="form-row px-2 ms-auto align-middle ">
      <input class="form-row me-1 align-middle" id='placeholder' type="search" placeholder="Look for something:" />
      <NavLink to="/search">
        <button class="btn btn-sm  btn-outline-success me-1 align-middle " id='btn-search' type="submit">Search</button>
      </NavLink>



{/* login sign up /////// */}

{/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <Button class="btn btn-sm  btn-outline-success me-1 align-middle " onClick={() => setLoginModalShow(true)} id='btn-login'>Log in</Button>
      <Button class="btn btn-sm  btn-outline-success me-1 align-middle " onClick={() => setSignupModalShow(true)} id='btn-login'>Sign up</Button>
      {/* <button class="btn btn-sm  btn-outline-success me-1 align-middle btn-light">Sign up</button> */}
    </form>

<ModalLogin  
show={loginModalShow}
onHide={() => setLoginModalShow(false)}
/>

<ModalSignup 
show={signupModalShow}
onHide={() => setSignupModalShow(false)}
/>



  </div>
</nav> 
</>
  )
}

