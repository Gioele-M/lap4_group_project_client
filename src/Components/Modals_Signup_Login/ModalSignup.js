import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles.css";
import { useSelector, useDispatch } from 'react-redux'  //BananaCreateNewPlaylist
import ModalLogin from '../Modals_Signup_Login/ModalLogin';
import { signupUser } from "../../State/actionCreators/user";

export default function ModalSignup(props) {


  const [loginModalShow, setLoginModalShow] = React.useState(false);


  
  const dispatch = useDispatch()






  return (
    <Modal {...props}  aria-labelledby="contained-modal-title-vcenter" centered id="modalstuff">
     
      <Modal.Header closeButton>
        <Modal.Title id="modalTitle">Sign Up</Modal.Title>
      </Modal.Header>
      
        {/* <div class="tab-pane Modal-signuplogin" id="signupSection" > */}
        <div class="tab-pane my-1  Modal-signuplogin" id="signupSection" >
          <div class="form p-4  text-center Modal-signuplogin" id="modalstuff1">
          <p id='modal-intro'>Please enter you details:</p>
            <input type="text" name="" class=" my-2 form-control" placeholder="User Name"/>
            <input type="text" name="" class="my-2 form-control" placeholder="Email"/>
            <input type="text" name="" class="my-2   form-control" placeholder="Password"/>
            <input type="text" name="" class=" my-2 form-control" placeholder="Repeat Password"/>



            <button class="my-4 btn" id="btn-login" 
            onClick={() => 
            dispatch(signupUser(
              {username: 'billieJeAN',
              password: 'PASSword1234',
              email: 'nunya@business.com', 
          }))}>
              Sign Up
            </button>



            <br/>
              {/* <a id='already'  onClick={handleClose}  href='#'>Already have an account?</a> */}
              <a id='already' href='#'>Already have an account?</a>
             
              {/* <a id='already' onClick={() => setLoginModalShow(true)}  href='#'>Already have an account?</a> */}

          {/* <ModalLogin  
            show={loginModalShow}
            onHide={() => setLoginModalShow(false)}
          /> */}


            {/* </div> */}
          </div>
        </div>
    </Modal>
  )
}
