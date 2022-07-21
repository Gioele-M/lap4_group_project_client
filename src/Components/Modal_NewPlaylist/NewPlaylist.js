import React, {useState, useRef, useEffect,} from "react";
import { useSelector, useDispatch } from 'react-redux'  //BananaCreateNewPlaylist
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles.css";
import { createNewPL } from "../../State/actionCreators/media";
import hexRGB from "../hex-rgb";


export default function NewPlaylist(props) {
  
  const dispatch = useDispatch()

  const userdata = useSelector(state => state.user.user)
  
  
  ///////////ignore the followingblock///////
  ///////////////////////////////////////////
  // const handleClose = () => setShow(false);
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
    
    
    const [playlistName, setPlaylistName] = useState('Playlist Name:');


    // function handleChange(event) {
    //   setPlaylistName(event.target.value);
    //   console.log('new update:',playlistName)
    // }

    let [colourChoice, setColourChoice] = useState('(0,0,0)')

    function handleChange() {
      let selectedColour = document.getElementById('MyColourPicker')
      // setPlaylistName(event.target.value);
      console.log('selected colour:', selectedColour.value)
      console.log('selected colour converted:',hexRGB(selectedColour.value))
      const selectedRGB = hexRGB(selectedColour.value)
      console.log(selectedRGB)
      // setColourChoice=selectedColour
      setColourChoice = hexRGB(selectedColour.value)

      console.log('3333333', colourChoice)
      console.log('3333333', colourChoice.type)
    }



  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered  id="modalstuff" >
      <Modal.Header closeButton>
        <Modal.Title id="modalTitle">Create A Playlist</Modal.Title>
      </Modal.Header>
      <div className="tab-pane my-1  Modal-signuplogin" id="signupSection" >
        <div className="form p-4  text-center Modal-signuplogin" id="modalstuff1">
          {/* <p id='modal-intro'>Please enter you details:</p> */}
            <div className="form  p-2 Modal-signuplogin" id="signupSection">

          <input type="text" name="" className="my-1 form-control" placeholder={playlistName}    />

          {/* <input type="checkbox" name="" className="my-3 form-control" placeholder="Public"/> */}
          {/* <label for="colourPicker"> Pick a background colour:</label><br/> */}


          <input ref={colourRef} type="color" className="my-3 form-control colourPicker"  id='MyColourPicker' 
          onChange={handleChange} />

        {/* matteos attempt with red */}
          {/* <input ref={colourRef} type="color" className="my-3 form-control colourPicker"  id='MyColourPicker' 
          onClick={() => setColourPicker1(colourRef.value)} placeholder="Colour"/> */}



          <input type="checkbox" id="privateCheck" name="privateCheck" value="private"></input>
          <label for="privateCheck"> Private</label><br/>


          <button className="my-4 btn " id="btn-login"       
          onClick={() => 
          dispatch(createNewPL(
            {playlistName: playlistName.value, //banana
            userEmail:userdata.userEmail,
            token: userdata.token//, 
            // playlistTheme: {colourChoice}  //banana - trying this
          }))}
      >
        Lets Go! 
        </button>

{/* location of playlistName:
media.data.data[0].playlistName
 */}








          {/* onClick={() => setLoginModalShow(true)}  */}
          {/* <button className="btn btn-dark btn-block" onClick={handleClose}>Signup</button> */}
          
        </div>
      </div>
      </div>
    </Modal>
  )
}
