import React from 'react'
import { PlaylistComponent } from '../../Components'
import BgSetter from '../../Components/BgColourSetter/index'



function PlaylistPage() {
  BgSetter()
  return (
    <PlaylistComponent title="Learning Flask Basics"/>
  )
}

export default PlaylistPage
