import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles.css";

export default function NewPlaylist(props) {
  // const handleClose = () => setShow(false);
  const [signupModalShow, setSignupModalShow] = React.useState(false);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered  id="modalstuff" >


      <Modal.Header closeButton>
        <Modal.Title id="modalTitle">Log in</Modal.Title>
      </Modal.Header>

      

      <div class="tab-pane my-1  Modal-signuplogin" id="signupSection" >
      <div class="form p-4  text-center Modal-signuplogin" id="modalstuff1">

      <p id='modal-intro'>Please enter you details:</p>
        <div class="form  p-2 Modal-signuplogin" id="signupSection">

          <input type="text" name="" class="my-1 form-control" placeholder="Playlist Name"/>
          <input type="text" name="" class="my-3 form-control" placeholder="Password"/>
          

          <button class="my-4 btn " id="btn-login">Log In</button>
            <br/>
              {/* <a id='already'  onClick={handleClose}  href='#'>Already have an account?</a> */}
              <a id='already'  href='#'>Don't have an account?</a>










          {/* onClick={() => setLoginModalShow(true)}  */}
          {/* <button class="btn btn-dark btn-block" onClick={handleClose}>Signup</button> */}
          
        </div>
      </div>
      </div>
    </Modal>
  )
}
