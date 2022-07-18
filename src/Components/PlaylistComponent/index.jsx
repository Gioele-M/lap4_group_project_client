import React, {useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Note from '../Note'
import PlaylistModal from '../PlaylistModal'
import styles from './index.module.css'

function PlaylistComponent({title}) {
  let notes = useSelector(state => state.media.data[0])
  console.log('A A A ', useSelector(state => state.media.data))
  console.log('* * *', notes)
  // console.log('= = =', typeof(notes.chapters) === typeof([1,2,3]))
  
  const [modalVisible, setModalVisible] = useState(false)

  const renderNotes =  
    notes.chapters.map((note, idx) => {
    console.log('KEY ', note.chapterId)
    console.log(note.chapterTitle)
    console.log(note.start)
    console.log(note.end)
    console.log(note.text)
    console.log(note.video_url)
    
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
      
      {renderNotes }

      
      
      <button className={styles.addNoteBtn}>+</button>

      

      {modalVisible && <PlaylistModal 
        showModal={setModalVisible}
         
         
         />}
      
      <button >Modal</button>
      <br />
      <br />
      <br />
    </div>
  )
}

export default PlaylistComponent
