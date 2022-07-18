import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import "./finalatempt.css";

export default function ModalSignup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <div>ModalSignup</div>
    <div class="tab-pane" id="signupSection" >
          <div class="form px-4">
            <input type="text" name="" class="form-control" placeholder="Name"/>
            <input type="text" name="" class="form-control" placeholder="Email"/>
            <input type="text" name="" class="form-control" placeholder="Phone"/>
            <input type="text" name="" class="form-control" placeholder="Password"/>
            <button class="btn btn-dark btn-block">Signup</button>
          </div>
        </div>
    </Modal>
  )
}
