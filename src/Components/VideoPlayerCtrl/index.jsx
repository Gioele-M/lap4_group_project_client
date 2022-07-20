import React, {useState, useEffect} from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import { useDispatch } from 'react-redux'
import { setStartTime, setEndTime } from '../../State/actionCreators/selection'

// import styles from './index.module.css'


function VideoPlayerCtrl({videoId, title, startAt, endAt, width=800, height=480, autoplay=0, endCb=()=> {}}) {

  const [now, setNow] = useState()
  const [start, setStart] = useState(startAt || '0')
  const [end, setEnd] = useState(endAt || '0')
  const [calcWidth, setCalcWidth] = useState(800)
  const [calcHeight, setCalcHeight] = useState(500)

  const dispatch = useDispatch('')

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

  // const roundDown = (num) => {
  //   // const myNum = 256.234567
  //   return String(num.toFixed(2))
  // }

  function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}

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
          dispatch(setStartTime(now))
        }}
        ><h4>From</h4>
      </button>
      <p className="col-3" data-testid='startLabel'><h5> {convertHMS(start)}</h5></p>

      <button
        className="col-3 btn btn-primary"
        onClick={() => {
          setEnd(now)
          dispatch(setEndTime(now))
        }}
        ><h4>To</h4>
      </button>
      <p className="col-3" data-testid='endLabel'><h5> {convertHMS(end)}</h5></p>

    </div>
    
    
    
    </div>
  )
}

export default VideoPlayerCtrl

