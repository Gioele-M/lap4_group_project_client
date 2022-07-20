import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.css'

import VideoPlayerCtrl from '../VideoPlayerCtrl'
import Note from '../Note'



function PlaylistModal({showModal, text, url}) {

  const noteData = useSelector(state => state.selection.selected)
  console.log('OOOOOOOOO ', noteData)
  const timedUrl = noteData.url + `?start=${noteData.start}&end=${noteData.end}`





  
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
      <VideoPlayerCtrl 
        videoId={noteData.url.slice(-11)} 
        title={noteData.noteTitle}
        startAt={noteData.start}
        endAt={noteData.end}   
      />
      <Note 
        text={noteData.text}
        url={noteData.url} 
        start={noteData.start}
        end={noteData.end}
        noteTitle={noteData.noteTitle}
        chapterId={noteData.chapterId}
      />
      <button onClick={() => showModal(false)} class={styles.deleteBtn}>X</button>
    </div>
    </div>
    
  )
}

export default PlaylistModal
