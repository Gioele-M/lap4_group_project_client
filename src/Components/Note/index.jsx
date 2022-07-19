import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedNote } from '../../State/actionCreators/selection'
import { patchMedia } from '../../State/actionCreators/media'

import styles from './index.module.css'

function Note(props) {
  const [noteText, setNoteText] = useState(props.text)
  const [link, setLink] = useState(props.url)
  console.log('--- ', props.chapterId)
  const dispatch = useDispatch('')

  const userData = useSelector(state => state.user.user)
  const mediaData = useSelector(state => state.media.data.data)

  console.log('--- USER ---\n', userData)
  console.log('--- MEDIA --\n', mediaData)

  const handleSaveBtn = () => {
    const data = {
      "userRequesting":userData.userEmail,
      "playlistName": mediaData.playlistName,
      "chapters": mediaData.chapters,
      "token": userData.token
      }

      dispatch(patchMedia(data))
    }

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
          <button 
            className={styles.saveBtn}
            onClick={() => handleSaveBtn}
          >Save</button>
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
