import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedNote } from '../../State/actionCreators/selection'
import { patchMedia, deleteNote, fetchMedia } from '../../State/actionCreators/media'
import './styles.css'

const playPic = require('../../images/utube.png')
// import styles from './index.module.css'

function Note(props) {
  const [noteText, setNoteText] = useState(props.text)
  const [title, setTitle] = useState(props.noteTitle)
  const [link, setLink] = useState(props.url)
  console.log('--- ', props.chapterId)
  const dispatch = useDispatch('')

  const userData = useSelector(state => state.user.user)
  const mediaData = useSelector(state => state.media.data.data)
  const [selected, setSelected] = useState(0)

  // console.log('--- USER ---\n', userData)
  // console.log('--- MEDIA --\n', mediaData)

  const handleSaveBtn = () => {
    const chapters = mediaData[0].chapters
    console.log('title:', title)

    chapters.forEach(chap => {
      if (chap.chapterId === props.chapterId) {
        console.log('chapterId is: ', chap.chapterId)
        console.log('link: ', chap.video_url)

        chap.text = noteText
        // chap.chaptertitle = noteChapterTitle
        // chap.start = noteStart
        // chap.end = noteEnd
        chap.video_url = link
        chap.chapterTitle = title
        
      }

      props.refreshPage(false)

      
    })

    console.log('UPDATED CHAPTERS -----------------\n', chapters)
    console.log('FUNCTION!!!!!!!!!!!!!!!!!!!!',props.refreshPage)

    const data = {
      // "userRequesting":userData.userEmail,
      userRequesting: userData.userEmail,
      "playlistName": mediaData[0].playlistName,
      "chapters": chapters[props.chapterId - 1],
      "token": userData.token
      }
      console.log('SAVING NOTE: ', noteText)
      dispatch(patchMedia(data))
    }

    // ASK GIO IF THIS ENDPOINT IS CORRECT: /playlist/delete
    const handleDeleteBtn = () => {

      // find the right chapter
      const chapters = mediaData[0].chapters
      // create the data
      chapters.forEach(chap => {
      if (chap.uuid === props.uuid) {
        console.log('chapterId is: ', chap.chapterId)
        

        const userRequesting = userData.userEmail
        // const userRequesting = userData.userEmail 
        console.log('* userRequesting: ', userRequesting)
        const playlistName = mediaData[0].playlistName
        console.log('* playlistName: ', playlistName)
        const token = userData.token
        console.log('* token: ', token)
        console.log('* chapterId: ', props.chapterId)
        
        // const chapterIndex = chapters.indexOf(chap)
        // console.log('CHAPTER INDEX ********',chapterIndex)
        // if(chapterIndex > -1){
        //   chapters.splice(chapterIndex, 1)
        // }

        const data = {
          userRequesting,
          playlistName,
          chapters: props.chapterId, //chapters, 
          token,
        }
        console.log('Deleting Data: ', data)
        // call the actionCreator for DELETE
        dispatch(deleteNote(data))
        // window.reload()
        // window.location.reload()
        // const x = ()=>{
        //   dispatch(fetchMedia({playlistName:}))
        // }
      }


      
    })
    
    setTimeout(props.refreshPage, 500, false)
    

      // update the page
    }

  return (
    <>
  <div id='popuptitle'>


    <h3 className="col-12 mt-1" id='NoteTitleSpan'>

    <kbd id='NoteTitleBorder'>

    <input id='NoteTitle'
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Note Title:"
    />

    </kbd>
    </h3>
  </div>



    <div className="container">
      <div className="row"id='NoteBody'>


        <h3 className="col-12 mt-1" id='NoteTitleSpan'>
          <kbd id='NoteTitleBorder'>
          <input id='NoteTitle'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title:"
          />

          
          
          
          
          </kbd>
          </h3>

          {/* <input 
              data-testid="linkurl"
              onChange={(e) => setLink(e.target.value)}
              className="col-12" 
              type="text" 
              placeholder="video link" 
              value={link || ''}
            /> */}



        <textarea 
          id='NoteArea'

          className="input col-10 lead text-justify"
          data-testid="textArea" 
          onChange={(e) => {
            setNoteText(e.target.value)
            setSelected(props.key)
            console.log('ZZZZZ', noteText)
            console.log('selected OoOoOo', selected)
          }}
          value={noteText || ''}
        />
        <div className="col-2" id='youtubeThumbnail-Btns-container'>
          <div className="" id='youtubeThumbnail-Btns-container2'>
            <img 
            id='Thumbnail'
              alt="red video player logo"
              onClick={() => {
                dispatch(setSelectedNote(props))
                props.onNoteClick()
              }}
              className="img-fluid"
              src={playPic}
            />
            
            <input 
              data-testid="linkurl"
              id='youtubeInput'
              onChange={(e) => setLink(e.target.value)}
              
              type="text" 
              placeholder="video link" 
              value={link || ''}
            />

            {props.showEdit &&
              <div className="row">
              <button 
                className="col-6 btn btn-danger"
                id="btn-delete"
                width='20px'
                onClick={() => handleDeleteBtn()}
                >Delete
              </button>
              
              <button 
                id="btn-save"
                className="col-6 btn btn-primary"
                onClick={() => handleSaveBtn()}
                >Save
              </button>
              {/* <div className="row"id='NoteBody'> */}
            </div>
              }
          </div>
        </div>
      </div>    
    </div>
    </>
  )
}

export default Note
