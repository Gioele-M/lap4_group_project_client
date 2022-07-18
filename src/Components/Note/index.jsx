import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedNote } from '../../State/actionCreators/selection'

import styles from './index.module.css'

function Note(props) {
  const [noteText, setNoteText] = useState(props.text)
  const [link, setLink] = useState(props.url)
  console.log('--- ', props.chapterId)
  const dispatch = useDispatch('')

  return (
    <div 
      
      className={styles.noteWrapper}>
        <textarea
        data-testid="textArea" 
          onChange={(e) => setNoteText(e.target.value)}
          className={styles.noteText} value={noteText || ''}/>
        <div className={styles.controls}>
          <div 
          onClick={() => {
            dispatch(setSelectedNote(props))
            props.onNoteClick()
          }
          }
          className={styles.thumbnail}>Pic</div>
          <button className={styles.saveBtn}>Save</button>
          <button className={styles.deleteBtn}>Delete</button>
          <input 
          data-testid="linkurl"
          onChange={(e) => setLink(e.target.value)}
            className={styles.link} type="text" placeholder="video link" value={link || ''}/>
        </div>
        
      </div>
  )
}

export default Note
