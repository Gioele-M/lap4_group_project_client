import React from 'react'
import { useSelector } from 'react-redux'
function DebugComponent() {
  const myUserState = useSelector((state) => state.user.user)
  const myDataState = useSelector((state) => state.media.data)
  console.log('*** ', myUserState)
  console.log('=== ', myDataState)
  return (
    <div>DebugComponent</div>
  )
}

export default DebugComponent
