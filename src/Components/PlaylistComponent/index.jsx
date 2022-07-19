import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMedia, patchMedia } from '../../State/actionCreators/media'
import Note from '../Note'
import PlaylistModal from '../PlaylistModal'
// import styles from './index.module.css'

function PlaylistComponent({title}) {
  let notes = useSelector(state => state.media.data.data)
  console.log('A A A ', useSelector(state => state.media.data))
  console.log('* * *', notes[0])
  console.log('= = =', typeof(notes) === typeof([1,2,3]))

  let loading = useSelector(state => state.media.loading)
  let userData = useSelector(state => state.user)

  const dispatch = useDispatch('')
  const [modalVisible, setModalVisible] = useState(false)

  const [fetchToggle, setFetchToggle] = useState(true)

  // useEffect(() => {
  //   const asyncCall = async () => {
  //     await dispatch(fetchMedia())
  //   }
  //   asyncCall()
  // }, [fetchToggle])

  const handleAddNoteBtn = () => {
    // get the last note ID and add 1
    console.log('lastChapter of Note => ', notes[0].chapters[notes[0].chapters.length-1])
    console.log('ChapterId of new note => ', notes[0].chapters[notes[0].chapters.length-1].chapterId + 1)
    const newNoteChapterId = notes[0].chapters[notes[0].chapters.length-1].chapterId + 1

    // create the data for an empty note
    const userRequesting = 'matteo@gmail.com'
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
        chapterId: newNoteChapterId,
        chapterTitle: '',
        start: '0',
        end: '0',
        text: '',
        video_url: ''
      }
    }
    // save the empty note in the DB (reducer) using the PATCH endpoint
    console.log('* newNote: ', newNote)
    dispatch(patchMedia(newNote))
    setTimeout(() => {
      setFetchToggle(!fetchToggle)
    }, 1000)
    
    
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
        onNoteClick={() => setModalVisible(true)}
      />
    )
  }) 
  
  
  return (
    <div className="container ">
      <div className="container">
        <h1>{title || 'Your Playlist'}</h1>

      <button className="btn btn-primary" onClick={()=> dispatch(fetchMedia())}>UPDATE</button>
      
      {loading === false && renderNotes }

      
      
      <button 
        className=""
        onClick={() => handleAddNoteBtn()}
      >+</button>

      

      {modalVisible && <PlaylistModal 
        showModal={setModalVisible}
      />}
      
      

      <br />
      <br />
      <br />
      </div>
      
    </div>
  )
}

export default PlaylistComponent
