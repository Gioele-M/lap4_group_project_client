import React, {useState, useRef, useEffect,} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles.css";
import { useSelector, useDispatch } from 'react-redux'  //BananaCreateNewPlaylist
// import NewPlaylist from '../Modals_Signup_Login/NewPlaylist';
import { signupUser } from "../../State/actionCreators/user";

export default function ModalSignup(props) {


  // const [loginModalShow, setLoginModalShow] = seState(false); user

  const dispatch = useDispatch()


  const [username, setUsername] = useState('Blank User:');
  const [password, setPassword] = useState('Blank Password:');
  const [email, setEmail] = useState('Blank Email');

  function handleChangeUsername(event) {
    setUsername({value: event.target.value});
    console.log('username field:',username)

    let user= document.getElementById('user')
    let  UsernameTrimmed = user.value.trim()

    console.log(UsernameTrimmed.length )
    if (UsernameTrimmed.length  > 0 && UsernameTrimmed.length  < 3){
      document.getElementById('usernameErrMsg').style.display='block'
      document.getElementById('user').style.color='red'
    }
    else{
      document.getElementById('usernameErrMsg').style.display='none'
      document.getElementById('user').style.color='black'
    }
  }
  
  function handleChangePassword(event) {
    setPassword({value: event.target.value});
    console.log('password field:',password)
    
    const p1= document.getElementById('pass1')
    const p2=  document.getElementById('pass2')
    if (p1.value === p2.value ){
      console.log('they are the same')
      document.getElementById('pass1').style.color='black'
      document.getElementById('pass2').style.color='black'
      document.getElementById('passErrMsg').style.display='none'
    }
    else{
      console.log('they are NOT the same')
      document.getElementById('pass1').style.color='red'
      document.getElementById('pass2').style.color='red'
      document.getElementById('passErrMsg').style.display= 'block';
    }
  }
  
  function handleChangeEmail(event) {
    setEmail({value: event.target.value});
    console.log('email field:',email)

    const emailField= document.getElementById('email')
    if (emailField.value.length==0 || emailField.value.includes('@') && emailField.value.includes('.')  ){
      document.getElementById('emailErrMsg').style.display='none'
    }
    else{
      document.getElementById('emailErrMsg').style.display='block'
    }
  }


  return (
    <Modal {...props}  aria-labelledby="contained-modal-title-vcenter" centered id="modalstuff">
     
      <Modal.Header closeButton>
        <Modal.Title id="modalTitle">Sign Up</Modal.Title>
      </Modal.Header>
      
        {/* <div class="tab-pane Modal-signuplogin" id="signupSection" > */}
        <div class="tab-pane my-1  Modal-signuplogin" id="signupSection" >
          <div class="form p-4  text-center Modal-signuplogin" id="modalstuff1">
          <p id='modal-intro'>Please enter you details:</p>

            <input type="text" maxlength='20' name="" class=" my-2 form-control" id='user' placeholder="User Name" onChange={handleChangeUsername}/>
            <p class='modalErr' id='usernameErrMsg'>Meh, Try again</p>

            <input type="email" name="" class="my-2 form-control" placeholder="Email" id='email' onChange={handleChangeEmail}/>
            <p class='modalErr' id='emailErrMsg'>That doesn't look like an email!</p>

            <input type="password" name="" class="my-2   form-control" id='pass1' placeholder="Password" onChange={handleChangePassword}/>
            <input type="password" name="" class=" my-2 form-control" id='pass2' placeholder="Repeat Password" onChange={handleChangePassword}/>
            <p class='modalErr' id='passErrMsg'>Passwords must match!</p>



            <button class="my-4 btn" id="btn-login" 
            onClick={() => 
            dispatch(signupUser(
              {username: username.value,
              password: password.value,
              email: email.value, 
          }))}>
              Sign Up
            </button>



            <br/>
              {/* <a id='already'  onClick={handleClose}  href='#'>Already have an account?</a> */}
              <a id='already' href='#'>Already have an account?</a>
             
              {/* <a id='already' onClick={() => setLoginModalShow(true)}  href='#'>Already have an account?</a> */}

          {/* <NewPlaylist  
            show={loginModalShow}
            onHide={() => setLoginModalShow(false)}
          /> */}


            {/* </div> */}
          </div>
        </div>
    </Modal>
  )
}
