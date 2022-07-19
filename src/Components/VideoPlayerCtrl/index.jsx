import React, {useState, useEffect} from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

// import styles from './index.module.css'


function VideoPlayerCtrl({videoId, title, startAt, endAt, width=800, height=480, autoplay=0, endCb=()=> {}}) {

  const [now, setNow] = useState()
  const [start, setStart] = useState(startAt || '0')
  const [end, setEnd] = useState(endAt || '0')
  const [calcWidth, setCalcWidth] = useState(800)
  const [calcHeight, setCalcHeight] = useState(500)

  const opts = {
    width: calcWidth,
    height: height,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1
    },
  };

  useEffect(() => {
    setCalcWidth(window.innerWidth  * 58 / 100)
    setCalcHeight(window.innerWidth * 16 / 9)
  }, [])

  return (
    <div data-testid={'videoWrapper'} className="">
      <YouTube
      id="utube"
      className=""
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
    <div className="row container">
      <button
        className="col-3 btn btn-primary"
        onClick={() => {
         setStart(now)
        }}
        >Start
      </button>
      <p className="col-3" data-testid='startLabel'>Start: {String(start)}</p>

      <button
        className="col-3 btn btn-primary"
        onClick={() => setEnd(now)}
        >End
      </button>
      <p className="col-3" data-testid='endLabel'>End: {String(end)}</p>

    </div>
    
    
    
    </div>
  )
}

export default VideoPlayerCtrl

