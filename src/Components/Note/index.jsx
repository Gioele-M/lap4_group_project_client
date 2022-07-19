import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedNote } from '../../State/actionCreators/selection'
import { patchMedia, fetchMedia } from '../../State/actionCreators/media'

import styles from './index.module.css'

function Note(props) {
  const [noteText, setNoteText] = useState(props.text)
  // const [noteChapterTitle, setNoteChapterTitle] = useState(props.noteTitle)
  const [link, setLink] = useState(props.url)
  // const [start, setStart] = useState(props.start)
  // const [end, setEnd] = useState(props.end)
  
  console.log('--- ', props.chapterId)
  const dispatch = useDispatch('')

  const userData = useSelector(state => state.user.user)
  const mediaData = useSelector(state => state.media.data.data)
  const [selected, setSelected] = useState(0)

  // console.log('--- USER ---\n', userData)
  // console.log('--- MEDIA --\n', mediaData)

  const handleSaveBtn = () => {
    const chapters = mediaData[0].chapters
  
      chapters.forEach(chap => {
      if (chap.chapterId === props.chapterId) {
        console.log('chapterId is: ', chap.chapterId)
        console.log('link: ', chap.video_url)
        chap.text = noteText
        // chap.chaptertitle = noteChapterTitle
        // chap.start = noteStart
        // chap.end = noteEnd
        chap.video_url = link
        
      }
      
    })
    console.log('UPDATED CHAPTERS -----------------\n', chapters)

    const data = {
      "userRequesting":userData.userEmail,
      "playlistName": mediaData[0].playlistName,
      "chapters": chapters,
      "token": userData.token
      }
      console.log('SAVING NOTE: ', noteText)

      dispatch(patchMedia(data))
    }
    
    useEffect(() => {
      const fetchMediaData = async () => {
        // fetch the actual data using fetchmedia
        await dispatch(fetchMedia())
      }
      fetchMedia()
  })

  return (
    <div 
      
      className={styles.noteWrapper}>
        <textarea
       
        data-testid="textArea" 
          onChange={(e) => {
            setNoteText(e.target.value)
            console.log('ZZZZZ', noteText)
            console.log('selected hardcoded', selected)
          }}
          className={styles.noteText} value={noteText || ''}/>
        <div className={styles.controls}>
          <div 
          onClick={() => {
            dispatch(setSelectedNote(props.key))
            props.onNoteClick()
          }
          }
          className={styles.thumbnail}>Pic</div>
          <button 
            className={styles.saveBtn}
            onClick={() => handleSaveBtn()}
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
