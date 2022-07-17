import React, {useState} from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

import styles from './index.module.css'


function VideoPlayerCtrl({videoId, title, startAt, endAt, width=640, height=390, autoplay=0, endCb=()=> {}}) {

  const [now, setNow] = useState()
  const [start, setStart] = useState('0')
  const [end, setEnd] = useState('0')

  const opts = {
    width: width,
    height: height,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: autoplay,
    },
  };

  return (
    <div className={styles.wrapper}>
      <YouTube
      videoId={videoId}
      title={title}
      start={startAt}
      end={endAt}
      onEnd={endCb}
      opts={opts}
      onStateChange={(x) => {
          let currTime = x.target.getCurrentTime()
          console.log('time: ', currTime)
          
          setNow(currTime)
        }
      }
      />
    <div className={styles.buttonWrapper}>
      <div
    className={styles.button}
      onClick={() => {
        setStart(now)
      }}
       >Start
    </div>
    <div
    className={styles.button}
      onClick={() => setEnd(now)}
      >End
    </div>
    </div>
    
    <p>Start: {String(start)}</p>
    <p>End: {String(end)}</p>
    </div>
  )
}

export default VideoPlayerCtrl
