import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import YouTube from 'react-youtube'

import { loginUser } from '../../State/actionCreators/user'
import { fetchMedia } from '../../State/actionCreators/media'
import { fetchVideos } from '../../State/actionCreators/utube'
import { scrollElement } from '../../utils/utils'
import styles from './index.module.css'


function DebugComponent() {
  const myUserState = useSelector((state) => state.user)
  const myMediaState = useSelector((state) => state.media)
  // console.log(`\nUSER\n `, myUserState)
  // console.log(`\nMEDIA\n`, myMediaState)

  const dispatch = useDispatch()
  
  const [now, setNow] = useState()
  const [start, setStart] = useState('0')
  const [end, setEnd] = useState('0')
  
  let scrollNote

  useEffect(() => {
    scrollNote = document.querySelector('#scrollNote')
    
  })
  let videos = useSelector(state => state.utube.videos)
  

  // x.target.getCurrentTime() returns the time passed from the start of the video
  const loadVideo = (index) => {
    // console.log('OOO', videos[index])
    
    return (
      videos.length > 0 ? 
      <YouTube 
      className={styles.player}
        title={videos[index].title}
        videoId={videos[index].id.videoId}
        onEnd={() => loadVideo(++index)}
        onStateChange={(x) => {
          // console.log(x)
          let currTime = x.target.getCurrentTime()
          console.log('WWWWWWW', currTime)
          
          setNow(currTime)
        }}
        onMouseIn={() => console.log('clicked')}
      /> : 'Fetch the videos to display them...'
    )
  }

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

      <iframe className={styles.iframe} title="debug title" width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?start=60&end=70">
      </iframe>
      {/* append to the address: ?mute=1&autoplay=1&loop=1&controls=0 */}

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

    
    {loadVideo(0)}
    <p>Start: {String(start)}</p>
    <p>End: {String(end)}</p>
    <div
      onClick={() => {
        console.log('*******************', now)
        setStart(now)
      }}
      className={styles.debugElement2} >Start
    </div>
    <div
      onClick={() => setEnd(now)}
      className={styles.debugElement2} >End
    </div>

  </>

  )
}

export default DebugComponent
