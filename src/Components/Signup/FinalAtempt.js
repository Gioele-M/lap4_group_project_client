import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./finalatempt.css";

// https://bbbootstrap.com/snippets/bootstrap-simple-tabbed-login-register-form-29443624#
// https://react-bootstrap.github.io/components/modal/

export default function FinalAtempt(props) {
  // const openCity = (evt, cityName) => {
  //   // Declare all variables
  //   var i, tabcontent, tablinks;
  //   // Get all elements with class="tabcontent" and hide them
  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
  //   // Get all elements with class="tablinks" and remove the class "active"
  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  //   }
  //   // Show the current tab, and add an "active" class to the button that opened the tab
  //   document.getElementById(cityName).style.display = "block";
  //   evt.currentTarget.className += " active";
  // };


  
  // function swicth() {
  //   console.log('clicked')
  //   if (document.getElementById('loginSection') === 'none'){
  //     console.log('its off')
  //   }
  // }


 



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Modal heading
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Centered Modal</h4>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
    </Modal.Body> */}

      <div class="card">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  


        <li class="nav-item" role="presentation"  
     

        >
          <button class="active nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
        </li>

        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
        </li>

        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
        </li>

      </ul>
      <div class="tab-content" id="pills-tabContent">
        
        <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">This is the homepage</div>
        <div class="tab-pane fade active show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">This is the other page</div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">this is the contac page</div>
      </div>
      
        {/* ///////////TABS */}
{/* 
        <button class="tablinks" onclick="openCity(event, 'log-in')" visibility='none'>
          Log in
        </button>
        <button class="tablinks" onclick="openCity(event, 'sign-up')">
          Sign up
        </button> */}

{/* /////////////////// */}

        {/* <div id="log-in" class="tabcontent">
          <h3>Log in</h3>
          <p>London is the capital city of England.</p>
        </div>

        <div id="sign-up" class="tabcontent" >
          <h3>Sign Up</h3>
          <p>Paris is the capital of France.</p>
        </div> */}

        {/* <button onClick={switch()}> check</button> */}

        {/* <ul class="nav nav-pills mb-3 " id="pills-tab" role="tablist">
        <li class="nav-item text-center active" >
          <a class="nav-link active btl" id="pills-home-tab" data-toggle="pill" onClick={swicth()} href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
        </li>
        <li class="nav-item text-center">
          <a class="nav-link btr" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> */}

        {/* ///////////default form*/}

  
{/* 
        <div class="form px-4 pt-5" id="loginSection">
            <input type="text" name="" class="form-control" placeholder="Email or Phone"/>
            <input type="text" name="" class="form-control" placeholder="Password"/>
            <button class="btn btn-dark btn-block">Login</button>
          </div>
        </div> */}





{/* 
      <div class="tab-pane" id="signupSection" >
          <div class="form px-4">
            <input type="text" name="" class="form-control" placeholder="Name"/>
            <input type="text" name="" class="form-control" placeholder="Email"/>
            <input type="text" name="" class="form-control" placeholder="Phone"/>
            <input type="text" name="" class="form-control" placeholder="Password"/>
            <button class="btn btn-dark btn-block">Signup</button>
          </div>
        </div> */}
        {/* <div class="tab-pane fade" id="pills-profile loginSection" role="tabpanel" aria-labelledby="pills-profile-tab">
          <div class="form px-4">
            <input type="text" name="" class="form-control" placeholder="Name"/>
            <input type="text" name="" class="form-control" placeholder="Email"/>
            <input type="text" name="" class="form-control" placeholder="Phone"/>
            <input type="text" name="" class="form-control" placeholder="Password"/>
            <button class="btn btn-dark btn-block">Signup</button>
          </div>
        </div> */}
        
       {/* </div> */}
      </div>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

// function MyVerticallyCenteredModal() {
