import React, {useState} from 'react'

import styles from './index.module.css'

function Note({noteTitle, start, end, url, text}) {
  const [noteText, setNoteText] = useState(text)
  const [link, setLink] = useState(url)

  return (
    <div className={styles.noteWrapper}>
        <textarea 
          onChange={(e) => setNoteText(e.target.value)}
          className={styles.noteText} value={noteText}/>
        <div className={styles.controls}>
          <div className={styles.thumbnail}></div>
          <button className={styles.saveBtn}>Save</button>
          <button className={styles.deleteBtn}>Delete</button>
          <input 
          onChange={(e) => setLink(e.target.value)}
            className={styles.link} type="text" placeholder="video link" value={link}/>
        </div>
        
      </div>
  )
}

export default Note
