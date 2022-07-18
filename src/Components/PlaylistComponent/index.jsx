import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchMedia } from '../../State/actionCreators/media'
import Note from '../Note'
import styles from './index.module.css'

function PlaylistComponent({title}) {
  const notes = useSelector(state => state.media.data[0].chapters[0])
  console.log('* * *', notes)
  
  const dispatch = useDispatch('')

  

  const renderNotes = notes.map((note, idx) => {
    // console.log(note.chapterTitle)
    // console.log(note.start)
    // console.log(note.end)
    // console.log(note.video_url)
    // console.log(note.text)
    
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

  useEffect(() => {
    dispatch(fetchMedia())
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      <h1>{title || 'Your Playlist'}</h1>
      
      {renderNotes}

      
      
      <button className={styles.addNoteBtn}>+</button>
    </div>
  )
}

export default PlaylistComponent
