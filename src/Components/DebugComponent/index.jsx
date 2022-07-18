import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { loginUser } from '../../State/actionCreators/user'
import { fetchMedia } from '../../State/actionCreators/media'
import { fetchVideos } from '../../State/actionCreators/utube'
import { scrollElement } from '../../utils/utils'
import { VideoPlayer } from '../'
import styles from './index.module.css'

const scrollNote = document.querySelector('#scrollNote')

function DebugComponent() {
  const myUserState = useSelector((state) => state.user)
  const myMediaState = useSelector((state) => state.media)
  console.log('***\n', myUserState)
  console.log('===\n', myMediaState)

  const dispatch = useDispatch()
  
  return (
    <>
      <div
      onClick={() => dispatch(loginUser())}
      className={styles.debugElement} >Click Me
      </div>

      <div
      onClick={() => dispatch(fetchMedia())}
      className={styles.debugElement2} >Click Me
      </div>


      <div 
      onClick={() => {scrollElement(scrollNote, 50, 1, () => {console.log('Hi')})}}
        id="scrollNote"
        className={styles.textBox}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi eum veritatis voluptatem amet quos vel nam dolores quo. Odio ducimus cumque sequi assumenda ipsum, qui nemo nisi voluptatem. Quisquam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta quisquam eveniet accusamus id vel, assumenda iusto explicabo quos similique ipsam tenetur neque qui, adipisci sequi totam nesciunt? Rem, nemo!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi eum veritatis voluptatem amet quos vel nam dolores quo. Odio ducimus cumque sequi assumenda ipsum, qui nemo nisi voluptatem. Quisquam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta quisquam eveniet accusamus id vel, assumenda iusto explicabo quos similique ipsam tenetur neque qui, adipisci sequi totam nesciunt? Rem, nemo!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi eum veritatis voluptatem amet quos vel nam dolores quo. Odio ducimus cumque sequi assumenda ipsum, qui nemo nisi voluptatem. Quisquam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta quisquam eveniet accusamus id vel, assumenda iusto explicabo quos similique ipsam tenetur neque qui, adipisci sequi totam nesciunt? Rem, nemo!
      </div>

    <div
    onClick={() => {dispatch(fetchVideos())}} 
    id="#searchBtn" className={styles.debugElement}>Fetch</div>


    <VideoPlayer videoId='tgAeF0AcLPY' title='Just a Title' start='100' end='null'/>
  </>

  )
}

export default DebugComponent
