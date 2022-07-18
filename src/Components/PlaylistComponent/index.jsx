import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Note from '../Note'
import styles from './index.module.css'

function PlaylistComponent({title}) {
  const notes = useSelector(state => state.media.data.chapters)
  console.log('* * * ', notes)
  const renderNotes = notes.map((note, idx) => {return <Note key={idx} noteTitle={note.chapter1.chapterTitle} start={note.chapter1.start} end={note.chapter1.end} url={note.chapter1.video_url} text={note.chapter1.text} />})

  return (
    <div className={styles.wrapper}>
      <h1>{title || 'Your Playlist'}</h1>
      
      { renderNotes }
      
      <button className={styles.addNoteBtn}>+</button>
    </div>
  )
}

export default PlaylistComponent
