import React, {useState, useRef, useEffect,} from "react";
import { useSelector, useDispatch } from 'react-redux'  //BananaCreateNewPlaylist
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles.css";
import { createNewPL } from "../../State/actionCreators/media";


export default function ModalLogin(props) {
  
  const dispatch = useDispatch()

  const userdata = useSelector(state => state.user.user)
  
  
  ///////////ignore the followingblock///////
  ///////////////////////////////////////////
  // const handleClose = () => setShow(false);
  const [signupModalShow, setSignupModalShow] = React.useState(false);
  const colourRef = useRef()
  const [colourPicker1, setColourPicker1] = useState('rgb(4,2,4)')
  // function checkValue (){
    console.log("rgbForm Value is:")
    console.log(colourPicker1)
    useEffect(() => {
      // Update the document title using the browser API
      console.log(colourPicker1)
    });
    // let rgbForm = colourPicker1
    // let rgbForm = document.getElementsByClassName.colourPicker
  // }
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  


  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered  id="modalstuff" >
      <Modal.Header closeButton>
        <Modal.Title id="modalTitle">Create A Playlist</Modal.Title>
      </Modal.Header>
      <div class="tab-pane my-1  Modal-signuplogin" id="signupSection" >
        <div class="form p-4  text-center Modal-signuplogin" id="modalstuff1">
          {/* <p id='modal-intro'>Please enter you details:</p> */}
            <div class="form  p-2 Modal-signuplogin" id="signupSection">



          <input type="text" name="" class="my-1 form-control" placeholder="Playlist Name:"/>



          {/* <input type="checkbox" name="" class="my-3 form-control" placeholder="Public"/> */}
          {/* <label for="colourPicker"> Pick a background colour:</label><br/> */}
          <input ref={colourRef} type="color" class="my-3 form-control colourPicker"  id='MyColourPicker' 
          onClick={() => setColourPicker1(colourRef.value)} placeholder="Colour"/>
          <input type="checkbox" id="privateCheck" name="privateCheck" value="private"></input>
          <label for="privateCheck"> Private</label><br/>


          <button class="my-4 btn " id="btn-login"       
          onClick={() => 
          dispatch(createNewPL(
            {playlistName: 'Toms Baking Playlist', 
            userEmail:userdata.userEmail,
            token: userdata.token,
            // tags: ['cakes','muffins'],
            // playlistTheme:'(32,250,100)' 
          }))}
      >
        
        Lets Go!
        
        </button>

{/* location of playlistName:
media.data.data[0].playlistName
 */}








          {/* onClick={() => setLoginModalShow(true)}  */}
          {/* <button class="btn btn-dark btn-block" onClick={handleClose}>Signup</button> */}
          
        </div>
      </div>
      </div>
    </Modal>
  )
}
