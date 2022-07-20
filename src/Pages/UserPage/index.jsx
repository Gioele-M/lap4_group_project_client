import React from 'react'
import ProfilePageCards2 from '../../Components/ProfilePageCards2';
import NewPlaylistBtn from '../../Components/NewPlaylistBtn';
import { useSelector } from 'react-redux'
import { useState } from 'react';



function UserPage() {
  const pStars= useSelector((state) => state.media.data.data[1].averageStars.currentRating)
  const pName= useSelector((state) => state.media.data.data[0].playlistName)
  const pOwner= useSelector((state) => state.media.data.data[0].playlistOwner)
  const pTheme= useSelector((state) => state.media.data.data[0].playlistTheme)


  const [cardInfo, setCardInfo] = useState ([
    { title: pName, owner: pOwner, stars: pStars, bgc:  pTheme},
    { title: pName, owner: pOwner, stars: pStars, bgc:  pTheme},
    { title: pName, owner: pOwner, stars: pStars, bgc:  pTheme}

    
  ]);

  console.log(cardInfo)
  return (
    <>
  {/* calling ProfilePageCards2 and fetching from reducer and injecting with props */}

   <ProfilePageCards2 data={cardInfo[0]} />
   <ProfilePageCards2 data={cardInfo[1]} />
   <ProfilePageCards2 data={cardInfo[2]} />
    
   <NewPlaylistBtn />
    </>
  )
  }
export default UserPage



