import React from 'react'
import "./styles.css";
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    const logo = require('../../images/logo.png');

    return (
    <>
    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light  align-items-end"> */}
    <nav class="navbar navbar-custom navbar-expand-lg navbar-light bg-light">


{/* align left */}
    <NavLink to="/">
      <img class="navbar-brand navbar-logo" href="#" src={logo} alt="Write and Watch Logo" />
    </NavLink>
       

{/* align right */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
          <NavLink id='no-decos' to="/">
            <a class="nav-link " href="#">Home</a>
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
          <a class="nav-link" href="#">My playlists</a>
        </NavLink>
      </li>

    </ul>
    <form class="form-row px-2 ms-auto align-middle ">
      <input class="form-row me-1 align-middle" type="search" placeholder="Enter key words" />
      <button class="btn btn-sm  btn-outline-success me-1 align-middle " type="submit">Search</button>
    </form>
  </div>
</nav> 




</>



  )
}
