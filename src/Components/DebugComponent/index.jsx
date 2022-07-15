import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDebug } from '../../State/actionCreators'

import styles from './index.module.css'

function DebugComponent() {
  const myUserState = useSelector((state) => state.user.user)
  const myDataState = useSelector((state) => state.media.data)
  console.log('*** ', myUserState)
  console.log('=== ', myDataState)

  const dispatch = useDispatch()

  return (
    <div
    onClick={() => dispatch(fetchDebug('buscaroli'))}
    className={styles.debugElement} >Click Me</div>
  )
}

export default DebugComponent
