import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDebug, fetchMedia, loginUser } from '../../State/actionCreators'

import styles from './index.module.css'

function DebugComponent() {
  const myUserState = useSelector((state) => state.user)
  const myMediaState = useSelector((state) => state.media)
  console.log(`\nUSER\n `, myUserState)
  console.log(`\nMEDIA\n`, myMediaState)

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

      <iframe className={styles.iframe} title="debug title" width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?start=60&end=70">
      </iframe>
      {/* append to the address: ?mute=1&autoplay=1&loop=1&controls=0 */}
  </>
  )
}

export default DebugComponent
