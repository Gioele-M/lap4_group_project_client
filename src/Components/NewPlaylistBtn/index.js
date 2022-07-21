import React from 'react'
import NewPlaylist from '../Modal_NewPlaylist/NewPlaylist'
import Button from 'react-bootstrap/Button'
import './styles.css'

export default function NewPlaylistBtn() {
  const [signupModalShow, setSignupModalShow] = React.useState(false)

  return (
    <>
      <Button
        className="btn btn-sm  btn-outline-success me-1 align-middle "
        onClick={() => setSignupModalShow(true)}
        id="btn-new-playlist"
      >
        ADD NEW PLAYLIST+
      </Button>

      <NewPlaylist
        show={signupModalShow}
        onHide={() => setSignupModalShow(false)}
      />
    </>
  )
}
