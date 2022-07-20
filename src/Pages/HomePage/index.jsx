import { Carousel } from 'bootstrap';
import React, { useEffect } from 'react'
import TrendingTopics from '../../Components/Carousel';
import NewPlaylistBtn from '../../Components/NewPlaylistBtn';

import "./styles.css";
import BgSetter from '../../Components/BgColourSetter/index'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrending } from '../../State/actionCreators/media';

function HomePage() {

  BgSetter()

  const dispatch = useDispatch()

  dispatch(fetchTrending())

    // const loggedIn = useSelector(state => state.user.user.userEmail)

    // useEffect(()=>{
    //   window.location.reload(false)

    // }, [])


  return (
    <>
    <TrendingTopics/>
    <div id='homepagepractice'>HomePage</div>

    <NewPlaylistBtn />
    </>

  )
}

export default HomePage
