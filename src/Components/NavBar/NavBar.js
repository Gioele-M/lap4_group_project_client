import React, { Component, useState } from 'react'
import "./styles.css";
import { useSelector } from 'react-redux'  
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import NewPlaylist from '../Modals_Signup_Login/NewPlaylist';
import ModalSignup from '../Modals_Signup_Login/ModalSignup';
import ModalLogin from '../Modals_Signup_Login/ModalLogin';
import ModalSignout from '../Modals_Signup_Login/ModalSignout';


export default function NavBar() {
    const logo = require('../../images/logo.png');

    // const [checkLogInStatus, setCheckLogInStatus] = useState(false)

    ////////////////////////////////////////////
    //modal states
    ////////////////////////////////////////////

    const [signupModalShow, setSignupModalShow] = React.useState(false);
    const [loginModalShow, setLoginModalShow] = React.useState(false);
    const [signoutModalShow, setSignoutModalShow] = React.useState(false);

    ////////////////////////////////////////////
    //To toggle loging/ log out btns
    ////////////////////////////////////////////

    const [loggedinChecker, setLoggedinChecker] = useState(false); //BANANA

    // const [user, setUser] = useState('Tom');

    // let usersname = useSelector((state) => state.user.user.usersname) //to be kept
    const [usersname, setUsersname] = useState(''); //to be deleted

    // const [user, setUser] = useState('Tom');

    function trying() {
      let loginbtnTog = document.getElementById('btn-login')
      let signupbtnTog = document.getElementById('btn-signup')
      let signoutbtnTog = document.getElementById('btn-signout')
      
      
      if (loggedinChecker === false){
        console.log('NOT logged in')
        loginbtnTog.style.display='inline'
        signupbtnTog.style.display='inline'
        signoutbtnTog.style.display='none'
        setUsersname = ''
      }
      else {
        
        console.log('logged in')
        // console.log('you are:',usersname)
        loginbtnTog.style.display='none'
        signupbtnTog.style.display='none'
        signoutbtnTog.style.display='inline'
        setUsersname = 'Tomhughes19'//DELETE THIS WHEN CONNECTED
      }    
    }

      window.addEventListener('load',trying);

    //  window.removeEventListener('load', this.handleLoad)  

    //  https://stackoverflow.com/questions/26059762/callback-when-dom-is-loaded-in-react-js





////////////////////////////////////////////





    return (
    <>
    <nav class="navbar navbar-custom navbar-expand-lg navbar-light bg-light pt-0 pb-0">

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
      <li class="nav-item">
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

      <btn class="ourbtns " onClick={() => setLoginModalShow(true)} id='btn-login'>Log in</btn>
      <btn class="ourbtns " onClick={() => setSignupModalShow(true)} id='btn-signup'>Sign up</btn>
      <btn class="ourbtns" onClick={() => setSignoutModalShow(true)} id='btn-signout'>Sign Out</btn>
      {/* <NavLink  to="/"> */}
      {/* <a  href="#">Tom</a> */}
      {/* </NavLink> */}

    </form>
      <a  href="#">{usersname}</a>


{/* Open the modals /////// */}
  <ModalLogin  
  show={loginModalShow}
  onHide={() => setLoginModalShow(false)}
  />

  <ModalSignup 
  show={signupModalShow}
  onHide={() => setSignupModalShow(false)}
  />

  <ModalSignout
    show={signoutModalShow}
    onHide={() => setSignoutModalShow(false)}
    />

{/* <ModalSignup 
  show={signupModalShow}
  onHide={() => setSignupModalShow(false)}
  /> */}


  </div>
</nav> 
</>
  )
}

