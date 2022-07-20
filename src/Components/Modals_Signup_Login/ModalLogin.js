import React, {useState, useRef, useEffect,} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from 'react-redux'  //BananaCreateNewPlaylist
import { loginUser } from "../../State/actionCreators/user";
import "./styles.css";

export default function ModalLogin(props) {
  const dispatch = useDispatch()
  
  
  const [email, setEmail] = useState('Email:');
  const [password, setPassword] = useState('Password:');
 
  
  // ////////////HANDLE CHANGES

////attempt1 CLASH WITH ATTEMPT 4

//THE RECORD VALUE IS ALWAYS ONE CHARACTER BEHIND THE REAL VALUE

  function handleChangeEmail(event) {
    setEmail({value: event.target.value});
    console.log('email field:',email)
  }

  function handleChangePassword(event) {
    setPassword({value: event.target.value});
    console.log('password field:',password)
  }

////attempt2

//IF THE POP IS OPEN ON RELOAD = GREAT

  // document.getElementById('emailFormBit').addEventListener('change', function() {
  //   console.log('You selected: ', this.value);
  //   setEmail(this.value)
  //   console.log('email is now: ', email);
  // });

  // document.getElementById('passwordFormBit').addEventListener('change', function() {
  //   console.log('You selected: ', this.value);
  //   setPassword(this.value)
  //   console.log('password is now: ', password);
  // });


////attempt3

  // function AttemptLogin() {       
  //     console.log('Helllo Joe!')
      // let practicebit = document.getElementById('passwordFormBit')
      // console.log('sssssssss', practicebit.values)



  //     dispatch(loginUser({email: email.value, password: password.value}))
  //  }


////attempt2

//THE RECORD VALUE IS ALWAYS ONE CHARACTER BEHIND THE REAL VALUE

// function handleChangeEmail(event) {
//   document.getElementById('emailFormBit').addEventListener('change', function() {
//     setEmail(this.value)
//     console.log('email is now: ', email.value);
//   });
// }

// function handleChangePassword(event) {
//   document.getElementById('passwordFormBit').addEventListener('change', function() {
//     setPassword(this.value)
//     console.log('password is now: ', password)
//   });
// }


  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered  id="modalstuff" >


      <Modal.Header closeButton>
        <Modal.Title id="modalTitle">Log in</Modal.Title>
      </Modal.Header>

      

      <div className="tab-pane my-1  Modal-signuplogin" id="signupSection" >
      <div className="form p-4  text-center Modal-signuplogin" id="modalstuff1">

      <p id='modal-intro'>Please enter you details:</p>
        <div className="form  p-2 Modal-signuplogin" id="signupSection">

          ///ATTEMPT 1
          <input type="text" name="" className="my-1 form-control" id='emailFormBit' placeholder={email} onChange={handleChangeEmail}/>
          <input type="text" name="" className="my-3 form-control" id='passwordFormBit'  placeholder={password} onChange={handleChangePassword}/>
          
               {/* ///ATTEMPT 2 */}
          {/* <input type="text" name="" className="my-1 form-control" id='emailFormBit' placeholder={email}/>
          <input type="text" name="" className="my-3 form-control" id='passwordFormBit' placeholder={password}/> */}
          
  {/* ///ATTEMPT 4 */}
          {/* <input type="text" name="" className="my-1 form-control" id='emailFormBit' placeholder={email} onChange={handleChangeEmail}/>
          <input type="text" name="" className="my-3 form-control" id='passwordFormBit'  placeholder={password} onChange={handleChangePassword}/> */}
          

           {/* <button className="my-4 btn " id="btn-login"
           onClick={AttemptLogin}
           >
             Log In
            </button>
            <br/> */}

          <button className="my-4 btn " id="btn-login"
          onClick={() => 
            
            dispatch(loginUser(
              {email: email.value, 
              password: password.value
            }))}>
            Log In
            </button>
            <br/>

              {/* <a id='already'  onClick={handleClose}  href='#'>Already have an account?</a> */}
              <a id='already'  href='#'>Don't have an account?</a>



          {/* onClick={() => setLoginModalShow(true)}  */}
          {/* <button className="btn btn-dark btn-block" onClick={handleClose}>Signup</button> */}
          
        </div>
      </div>
      </div>
    </Modal>
  )
}
