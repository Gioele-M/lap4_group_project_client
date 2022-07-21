import React from 'react'
import NewPlaylist from '../Modal_NewPlaylist/NewPlaylist'
import Button from 'react-bootstrap/Button'
import './styles.css'

export default function NewPlaylistBtn() {
  const [signupModalShow, setSignupModalShow] = React.useState(false)

  return (
    <>
      <div class="d-flex justify-content-center">
        <Button
          className="btn btn-sm  btn-outline-success me-1 align-middle "
          onClick={() => setSignupModalShow(true)}
          id="btn-login"
        >
          ADD NEW PLAYLIST+
        </Button>
      </div>
      <NewPlaylist
        show={signupModalShow}
        onHide={() => setSignupModalShow(false)}
      />
    </>
  )
}

{
  /*
<div class="d-flex justify-content-center">
    <Button className="btn btn-sm  btn-outline-success me-1 align-middle " onClick={() => setSignupModalShow(true)} id='btn-login'>ADD NEW PLAYLIST+</Button>
</div>
<NewPlaylist show={signupModalShow}
    onHide={() => setSignupModalShow(false)}/>
  </>  
*/
}
