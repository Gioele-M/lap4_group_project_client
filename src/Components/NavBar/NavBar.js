import React, { Component, useEffect, useState } from 'react'
import "./styles.css";
import { useSelector, useDispatch } from 'react-redux'  
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import NewPlaylist from '../Modals_Signup_Login/NewPlaylist';
import ModalSignup from '../Modals_Signup_Login/ModalSignup';
import ModalLogin from '../Modals_Signup_Login/ModalLogin';
import ModalSignout from '../Modals_Signup_Login/ModalSignout';
import searchIcon from'../../images/searchIcon.png';
import { setSearchTerm } from '../../State/actionCreators/selection';
import { fetchMedia } from '../../State/actionCreators/media';

export default function NavBar() {
    const loggedIn = useSelector(state => state.user.user.userEmail)
  
    console.log('*********************************************LOGGED IN', loggedIn)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // useEffect(()=>{
    //   window.location.reload(false)

    // }, [])
    

    const logo = require('../../images/logo.png');


    // const [checkLogInStatus, setCheckLogInStatus] = useState(false)

    // let signinBtn = document.getElementById('btn-signout')

    // signinBtn.style.display='none'

    ////////////////////////////////////////////
    //modal states
    ////////////////////////////////////////////

    const [signupModalShow, setSignupModalShow] = React.useState(false);
    const [loginModalShow, setLoginModalShow] = React.useState(false);
    const [signoutModalShow, setSignoutModalShow] = React.useState(false);

    ////////////////////////////////////////////
    //To toggle loging/ log out btns
    ////////////////////////////////////////////

    const [loggedinChecker, setLoggedinChecker] = useState(loggedIn); //BANANA

    // const [user, setUser] = useState('Tom');

    // let usersname = useSelector((state) => state.user.user.usersname) //to be kept
    const [usersname, setUsersname] = useState(''); //to be deleted

    // const [user, setUser] = useState('Tom');

    function trying() {
      let loginbtnTog = document.getElementById('btn-login')
      let signupbtnTog = document.getElementById('btn-signup')
      let signoutbtnTog = document.getElementById('btn-signout')
      
      
      if (loggedIn == false){
        console.log('NOT logged in')
        loginbtnTog.style.display='inline'
        signupbtnTog.style.display='inline'
        signoutbtnTog.style.display='none'
        setUsersname('')
      }
      else {
        
        console.log('logged in')
        // console.log('you are:',usersname)
        loginbtnTog.style.display='none'
        signupbtnTog.style.display='none'
        signoutbtnTog.style.display='inline' 
        setUsersname('Tomhughes19')//DELETE THIS WHEN CONNECTED BANANA
      }    
    }

      window.addEventListener('load',trying);

    //  window.removeEventListener('load', this.handleLoad)  

    //  https://stackoverflow.com/questions/26059762/callback-when-dom-is-loaded-in-react-js





////////////////////////////////////////////

    const handleSearch = (e) => {
      e.preventDefault()
      let searchValue = e.target.parentNode.parentNode.firstChild.value
      console.log(e.target.parentNode.parentNode.firstChild.value)
      dispatch(setSearchTerm(searchValue))
      dispatch(fetchMedia({playlistName: searchValue}))
      navigate('/search')

    }



    return (
    <>
    <nav className="navbar navbar-custom navbar-expand-lg navbar-light bg-light pt-0 pb-0" id='main-navbar'>
    {/* <div className="container-fluid" > */}

{/* LOGO */}
    <NavLink to="/">
      <img className="navbar-brand navbar-logo" href="#" src={logo} alt="Write and Watch Logo" />
    </NavLink>
       

{/* align right */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


{/* TEXT LINKS  /////////////////// */}
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02 ">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 " id=' font1'>
      <li className="nav-item active">
          <NavLink id='no-decos' className="nav-link active text-black" to="/">
            Home
          </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink id='no-decos' to="/about" className="nav-link text-black">
        About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink id='no-decos' to="/user" className="nav-link text-black">
          Profile
        </NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink id='no-decos' to="/playlist" className="nav-link text-black">
          Playlist
        </NavLink>
      </li> */}

{/* SEARCH  /////////////////// */}
    </ul>
    <form className="form-row px-2 ms-auto align-middle ">
      <input className="form-row me-1 align-middle" id='searchBox' type="search" placeholder="Look for something:" />
      <NavLink onClick={handleSearch} to="/search">
        <img id='searchIcon' src={searchIcon}alt="fireSpot"/>
      </NavLink>
      {/* style={nbStyle.logo}  */}


{/* login sign up /////// */}

      <Button className="btn btn-sm  btn-outline-success me-1 align-middle" onClick={() => setLoginModalShow(true)} id='btn-login'>Log in</Button>
      <Button className="btn btn-sm  btn-outline-success me-1 align-middle" onClick={() => setSignupModalShow(true)} id='btn-signup'>Sign up</Button>
      <Button className="btn btn-sm  btn-outline-success me-1 align-middle" onClick={() => setSignoutModalShow(true)} id='btn-signout'>Sign Out</Button>
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
   {/* </div> */}
</nav> 
</>
  )
}

