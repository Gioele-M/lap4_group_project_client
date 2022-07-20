import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMedia, patchMedia } from '../../State/actionCreators/media'
import Note from '../Note'
import PlaylistModal from '../PlaylistModal'
// import styles from './index.module.css'

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

  let playlistName = useSelector(state => state.selection.selected)


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
        refreshPage={setCanLoad}
        onNoteClick={() => setModalVisible(true)}
      />
    )
  }) 
  
  
  return (
    <div className="container">
      <div className="container d-flex flex-column justify-content-start">
       
        <button className="btn btn-primary mt-2 mb-2" onClick={()=>dispatch(fetchMedia({playlistName: playlistName}))}>UPDATE</button>
        <h1 className="mt-4 mb-2 text-light bg-dark">{title || 'Your Playlist'}</h1>

        
      
        { canLoad && renderNotes }

      
        <div className="row">
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
