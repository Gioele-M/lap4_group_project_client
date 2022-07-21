import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMedia, patchMedia } from '../../State/actionCreators/media'
import Note from '../Note'
import PlaylistModal from '../PlaylistModal'
import styles from './index.module.css'
import './styles.css'
import Button from 'react-bootstrap/Button';


function PlaylistComponent({title}) {
  const dispatch = useDispatch('')
  // dispatch(fetchMedia())
  let notes = useSelector(state => state.media.data.data)
  console.log('A A A ', useSelector(state => state.media.data))
  console.log('* * *', notes)
  console.log('= = =', typeof(notes) === typeof([1,2,3]))

  let loading = useSelector(state => state.media.loading)

  console.log('********************', loading)


  let userData = useSelector(state => state.user)

  let playlistData = useSelector(state => state.media.data.data[0])

  let playlistName = playlistData.playlistName

  const [modalVisible, setModalVisible] = useState(false)

  const [fetchToggle, setFetchToggle] = useState(true)

  const [canLoad, setCanLoad] = useState(false)


  function useForceUpdate(){
    // dispatch(fetchMedia({playlistName: playlistName}))
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment 👆🏻 the previous state like here 
    // is better than directly setting `value + 1`
}

const onUpdateClick = ()=>{
  // dispatch(fetchMedia({playlistName: playlistName}))
}


  useEffect(() => {
    const fetchData = () => {
      // Get playlist name and pass it to fetchmedia 
      dispatch(fetchMedia({playlistName: playlistName}))
      setCanLoad(true)
    }
    fetchData()


  }, [dispatch, canLoad])

  const handleAddNoteBtn = () => {
    // get the last note ID and add 1
    console.log('lastChapter of Note => ', notes[0].chapters[notes[0].chapters.length-1])
    console.log('ChapterId of new note => ', notes[0].chapters[notes[0].chapters.length-1].chapterId + 1)
    const newNoteChapterId = notes[0].chapters[notes[0].chapters.length-1].chapterId + 1

    // create the data for an empty note
    const userRequesting = userData.user.userEmail
    // const userRequesting = userData.user.userEmail
    console.log('* userRequesting', userRequesting)
    const playlistName = notes[0].playlistName
    console.log('* playlistName: ', playlistName)
    const chapters = notes[0]
    console.log('* chapters: ', chapters.chapters)
    const token = userData.user.token
    console.log('* token: ', token)
    const newNote = {
      userRequesting,
      playlistName,
      token,
      chapters: {
        chapterId: parseInt(newNoteChapterId),
        chapterTitle: '',
        start: '0',
        end: '0',
        text: '',
        video_url: ''
      }
    }
    // save the empty note in the DB (reducer) using the PATCH endpoint
    console.log('************** newNote: ', newNote)
    dispatch(patchMedia(newNote))
    setTimeout(() => {
      setFetchToggle(!fetchToggle)
    }, 1000)


    setCanLoad(false)
    
    // refresh the page
  }
  
  console.log('EDITING ACEESSSSSSSSSSSS', userData.user.userEmail, playlistData.playlistOwner, userData.user.userEmail == playlistData.playlistOwner)
  const renderNotes =  
    notes[0]['chapters'].map((note, idx) => {
    // console.log('KEY ', note.chapterId)
    // console.log(note.chapterTitle)
    // console.log(note.start)
    // console.log(note.end)
    // console.log(note.text)
    // console.log(note.video_url)
    
    return (
      <Note
        key={idx}
        chapterId={note.chapterId} 
        noteTitle={note.chapterTitle} 
        start={note.start} 
        end={note.end} 
        url={note.video_url} 
        text={note.text}
        uuid={note.uuid}
        showEdit={true}
        refreshPage={setCanLoad}
        onNoteClick={() => setModalVisible(true)}
      />
    )
  }) 

  console.log(playlistName)
  
  
  return (


    <div className="container" id='mainNoteContainer'>
      <div className="container d-flex flex-column justify-content-start"  >
       
       <div id='title-updateBTN-container'>
        <h1 id='PlaylistTitle'>{playlistName || 'Your Playlist'}</h1>
        {/* <Button className="btn btn-sm  btn-outline-success me-1 align-middle" id='btn-update' onClick={()=> dispatch(fetchMedia({playlistName: playlistName}))}>UPDATE</Button> */}
        </div>
        
      
        { canLoad && renderNotes }

      
        <div className="row" id='mainNoteContainer'>
        {/* <Button className="btn btn-sm  btn-outline-success me-1 align-middle" onClick={() => setSignoutModalShow(true)} id='btn-signout'>Sign Out</Button> */}

          <button 
            className="btn btn-primary col-12"
            onClick={() => handleAddNoteBtn()}
          >
            <h3>+</h3>
          </button>
        </div>

        {modalVisible && <PlaylistModal showModal={setModalVisible} />}
      
        <br />
        <br />
        <br />
      </div>
      
    </div>
  )
}

export default PlaylistComponent
