import React, {useState} from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

import styles from './index.module.css'


function VideoPlayerCtrl({videoId, title, startAt, endAt, width=640, height=390, autoplay=0, endCb=()=> {}}) {

  const [now, setNow] = useState()
  const [start, setStart] = useState(startAt || '0')
  const [end, setEnd] = useState(endAt || '0')

  const opts = {
    width: width,
    height: height,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1
    },
  };

  return (
    <div data-testid={'videoWrapper'} className={styles.wrapper}>
      <YouTube
      data-testid='videoplayer'
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
      <button
    className={styles.button}
      onClick={() => {
        setStart(now)
      }}
       >Start
    </button>
    <button
    className={styles.button}
      onClick={() => setEnd(now)}
      >End
    </button>
    </div>
    
    <p data-testid='startLabel'>Start: {String(start)}</p>
    <p data-testid='endLabel'>End: {String(end)}</p>
    </div>
  )
}

export default VideoPlayerCtrl
