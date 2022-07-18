////////////////IGNORE THIS



import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import "./finalatempt.css";

// https://bbbootstrap.com/snippets/bootstrap-simple-tabbed-login-register-form-29443624#
// https://react-bootstrap.github.io/components/modal/

export default function Login(props) {
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
        <li class="nav-item text-center">
          <a class="nav-link active btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
        </li>
        <li class="nav-item text-center">
          <a class="nav-link btr" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a>
        </li>
       
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          
          <div class="form px-4 pt-5">

            <input type="text" name="" class="form-control" placeholder="Email or Phone"/>

            <input type="text" name="" class="form-control" placeholder="Password"/>
            <input type="text" name="" class="form-control" placeholder="Repeat Password"/>
            <button class="btn btn-dark btn-block">Sign up</button>

          </div>



        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          

          <div class="form px-4">
            <input type="text" name="" class="form-control" placeholder="Name"/>
            <input type="text" name="" class="form-control" placeholder="Email"/>
            <input type="text" name="" class="form-control" placeholder="Phone"/>
            <input type="text" name="" class="form-control" placeholder="Password"/>
            <button class="btn btn-dark btn-block">Signup</button>
          </div>



        </div>
        
       </div>
    
  
  

</div>




    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}
