import React, { useEffect, useState } from "react";

import styles from './index.module.css'

let player;

export const VideoPlayer = ({videoId, title, startAt, endAt, width=640, height=390, autoplay=0, endCb=()=> {}}) => {
  // "ZPt9dJw1Dbw"
  const [now, setNow] = useState()
  const [start, setStart] = useState(startAt || '0')
  const [end, setEnd] = useState(endAt || '0')


  const handleOnReady = (event) => {

  }

  const handleStateChange = (x) => {
    let currTime = x.target.getCurrentTime()
    console.log('time: ', currTime)
          
    setNow(currTime)
  }

  const handleError = (err) => {
    console.log('Error: ', err)
  }

  useEffect(() => {
    if (!window.YT) {
      // If not, load the script asynchronously
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";

      // onYouTubeIframeAPIReady will load the video after the script is loaded

      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      loadVideo();
    }

    function loadVideo() {
      if (!player) {
        player = new window.YT.Player('videoPlayer', {
          videoId: videoId,
          title: {title},
          start: {startAt},
          end: {endAt},
          onEnd: {endCb},
          events: {
            onReady: (event) => handleOnReady(event),
            onStateChange: (x) => handleStateChange(x),
            onError: (err) => handleError(err)
          }
        })
        };
      }
      
      if (player && player.loadVideoById) {
        player.loadVideoById({ videoId });
      }
    
    //
  }, [videoId]);

  

  return (
    <div className={StyleSheet.wrapper}>
      <div 
        id={'videoPlayer'}
        data-testid='videoplayer' 
      />

      <div className={styles.btnsWrapper}>
       
        <button
          className={styles.button}
          onClick={() => {setStart(now)}
        }
        >
          Start
        </button>
        
        <button
          className={styles.button}
          onClick={() => setEnd(now)}
        >
          End
        </button>
      
      </div>

      <p data-testid='startLabel'>Start: {String(start)}</p>
      <p data-testid='endLabel'>End: {String(end)}</p>

    </div>
  );
};


