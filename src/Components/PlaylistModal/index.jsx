import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.css'

import VideoPlayer from '../VideoPlayer'
import Note from '../Note'



function PlaylistModal({showModal, text, url}) {

  const noteData = useSelector(state => state.selection.selected)

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
      <VideoPlayer videoId={noteData.url.slice(-11)}/>
      <Note 
        text={noteData.text}
        url={noteData.url} 
        start={noteData.start}
        end={noteData.end}
        noteTile={noteData.chapterTitle}
        chapterId={noteData.chapterId}
      />
      <button onClick={() => showModal(false)} class={styles.deleteBtn}>X</button>
    </div>
    </div>
    
  )
}

export default PlaylistModal
