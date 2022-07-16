import React from 'react'
import "./styles.css";

export default function NavBar() {

    const logo = require('../../images/logo.png');

    return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img class="navbar-brand navbar-logo" href="#" src={logo} alt="Write and Watch Logo" />
       
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Profile</a>
      </li>
    </ul>
    {/* <form class="form-inline my-lg-0  pull-right "> */}
    <form>
    {/* <input class="form-control mr-sm-2 pull-right" type="search" placeholder="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0 pull-right " type="submit">Search</button> */}
      <input class="" type="search" placeholder="Search" />
      <button class="mine" type="submit">Search</button>
    </form>
  </div>
</nav> 
</>



  )
}
