import React from 'react'
import { useSelector } from 'react-redux'

import Note from '../Note'
import styles from './index.module.css'

function PlaylistComponent({title}) {
  let notes = useSelector(state => state.media.data[0])
  console.log('A A A ', useSelector(state => state.media.data))
  console.log('* * *', notes)
  // console.log('= = =', typeof(notes.chapters) === typeof([1,2,3]))
  
  

  const renderNotes =  
    notes.chapters.map((note, idx) => {
    console.log(note.chapterTitle)
    console.log(note.start)
    console.log(note.end)
    console.log(note.text)
    console.log(note.video_url)
    
    return (
      <Note
        key={idx} 
        noteTitle={note.chapterTitle} 
        start={note.start} 
        end={note.end} 
        url={note.video_url} 
        text={note.text} 
      />
    )
  }) 
  

 

  

  return (
    <div className={styles.wrapper}>
      <h1>{title || 'Your Playlist'}</h1>
      
      {renderNotes }

      
      
      <button className={styles.addNoteBtn}>+</button>
    </div>
  )
}

export default PlaylistComponent
