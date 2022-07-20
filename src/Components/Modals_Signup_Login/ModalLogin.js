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

  const handleLogin = useCallback(
    () => sendPhoneNumber(phoneNumber)
      .then(response => dispatch({
        type: 'PHONE_NUMBER_SUBMISSION_SUCCESS',
        response,
      }))
      .catch(error => dispatch({
        type: 'PHONE_NUMBER_SUBMISSION_FAILURE',
        error,
      })),
    [dispatch, phoneNumber],
  );
//   const DispatchFetch = () => {
//     const { data, isRequesting, error } = useSelector(selector());
//     if (!isRequesting && data) {
//       const Comp = component;
//       return <Comp data={data}></Comp>;
//     } else if (error) {
//       if (errorComponent) {
//         const ErrorComp = errorComponent;
//         return <ErrorComp error={error}></ErrorComp>;
//   };
//   return <DispatchFetch></DispatchFetch>;
// };      }
//       return <div>{error}</div>;
//     }
//     return <Spinner></Spinner>;
          
  dispatch(loginUser({email: email.value, password: password.value}))


  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered  id="modalstuff" >


      <Modal.Header closeButton>
        <Modal.Title id="modalTitle">Log in</Modal.Title>
      </Modal.Header>

      <div class="tab-pane my-1  Modal-signuplogin" id="signupSection" >
      <div class="form p-4  text-center Modal-signuplogin" id="modalstuff1">

      <p id='modal-intro'>Please enter you details:</p>
        <div class="form  p-2 Modal-signuplogin" id="signupSection">

          <input type="text" name="" class="my-1 form-control" id='emailFormBit' placeholder={email} onChange={handleChangeEmail}/>
          <input type="text" name="" class="my-3 form-control" id='passwordFormBit'  placeholder={password} onChange={handleChangePassword}/>

          <button class="my-4 btn " id="btn-login"
          onClick={() => 
            
            dispatch(loginUser(
              {email: email.value, 
              password: password.value
            }))}>
            Log In
            </button>
            <br/>

              <a id='already'  href='#'>Don't have an account?</a>
          
        </div>
      </div>
      </div>
    </Modal>
  )
}
