import { Carousel } from 'bootstrap';
import React from 'react'
import TrendingTopics from '../../Components/Carousel';
import NewPlaylistBtn from '../../Components/NewPlaylistBtn';

import "./styles.css";
import BgSetter from '../../Components/BgColourSetter/index'
import HowTo from '../../Components/HowTo';


function HomePage() {
  BgSetter()

  return (
    <>

    <TrendingTopics/>
   
    {/* <div id='homepagepractice'>HomePage</div> */}
    <NewPlaylistBtn />
    <HowTo/>
    </>

  )
}

export default HomePage
