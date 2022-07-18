import React from 'react'

import styles from './index.module.css'

function PlaylistComponent({title}) {
  return (
    <div className={styles.wrapper}>
      <h1>{title || 'Your Playlist'}</h1>
      <div className={styles.noteWrapper}>
        <textarea className={styles.noteText} />
        <div className={styles.controls}>
          <div className={styles.thumbnail}></div>
          <button className={styles.saveBtn}>Save</button>
          <button className={styles.deleteBtn}>Delete</button>
          <input className={styles.link} type="text" placeholder="video link"/>
        </div>
      </div>
        
        
      
      <div className={styles.addNoteBtn}>Add</div>
    </div>
  )
}

export default PlaylistComponent
