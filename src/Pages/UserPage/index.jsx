import React from 'react'
import ProfilePageCards2 from '../../Components/ProfilePageCards2';
import NewPlaylistBtn from '../../Components/NewPlaylistBtn';
import { useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from 'react';
import { fetchMedia } from '../../State/actionCreators/media';
import { Container, Row, Col }  from 'react-bootstrap';

import './styles.css'

function UserPage() {

  const dispatch = useDispatch()

  const userEmail = useSelector((state)=> state.user.user.userEmail)

  console.log('USER EMAIL ->>>>>>>>', userEmail)
  
  useEffect(()=>{
    const fetchDispatch = async () =>{
      await dispatch(fetchMedia({playlistOwner: userEmail}))

    }
    fetchDispatch()

  }, [])

  const userPlaylists = useSelector((state)=> state.media.data.data)

  console.log('USER PLAYLISTS!!!!! ->>>>>>>>', userPlaylists)
  

  const mapPlaylists = ()=>{
    return userPlaylists.map((pl, idx)=>{
        let playlistCardData = { title: pl.playlistName, owner: pl.playlistOwner, stars: pl.averageStars.currentRating, bgc:  pl.playlistTheme}

        return <ProfilePageCards2 data={playlistCardData} key={idx} />


    })
    
  }


  return (
    <div className="userpage-wrapper">
    
      <div className='container randomX'>
        <div className='row'>
          {mapPlaylists()}
        </div>
      </div>

      <NewPlaylistBtn />
   </div>
  )
  }
export default UserPage



