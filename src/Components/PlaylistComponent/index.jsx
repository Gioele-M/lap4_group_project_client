import React, {useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMedia } from '../../State/actionCreators/media'
import Note from '../Note'
import PlaylistModal from '../PlaylistModal'
import styles from './index.module.css'

function PlaylistComponent({title}) {
  let notes = useSelector(state => state.media.data.data)
  // console.log('A A A ', useSelector(state => state.media.data))
  // console.log('* * *', notes[0])
  // console.log('= = =', typeof(notes) === typeof([1,2,3]))

  let loading = useSelector(state => state.media.loading)

  const dispatch = useDispatch('')
  const [modalVisible, setModalVisible] = useState(false)

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
    <div className={styles.wrapper}>
      <h1>{title || 'Your Playlist'}</h1>

      <button onClick={()=> dispatch(fetchMedia())}></button>
      
      {loading === false && renderNotes }

      
      
      <button className={styles.addNoteBtn}>+</button>

      

      {modalVisible && <PlaylistModal 
        showModal={setModalVisible}
      />}
      
      

      <br />
      <br />
      <br />
    </div>
  )
}

export default PlaylistComponent
