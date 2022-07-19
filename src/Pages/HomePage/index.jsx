import React from 'react'
import NewPlaylistBtn from '../../Components/NewPlaylistBtn';
import "./styles.css";
import BgSetter from '../../Components/BgColourSetter/index'


function HomePage() {
  BgSetter()

  return (

    <>
    <div id='homepagepractice'>HomePage</div>

<NewPlaylistBtn />

</>
  )
}

export default HomePage
