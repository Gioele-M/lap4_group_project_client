import React from 'react'
import ProfilePageCards2 from '../../Components/ProfilePageCards2';
import NewPlaylistBtn from '../../Components/NewPlaylistBtn';
import { useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from 'react';
import { fetchMedia } from '../../State/actionCreators/media';



function UserPage() {
  // Dispatch request based on user
  // Get user playlists 
  // render the playlists
  const dispatch = useDispatch()

  // const pStars= useSelector((state) => state.media.data.data[0].averageStars.currentRating) //BANANA
  // const pName= useSelector((state) => state.media.data.data[0].playlistName)
  // const pOwner= useSelector((state) => state.media.data.data[0].playlistOwner)
  // const pTheme= useSelector((state) => state.media.data.data[0].playlistTheme)

  // GET user email and send fetch request with it
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




  const [cardInfo, setCardInfo] = useState ([
    { title: "pName", owner: "pOwner", stars: "pStars", bgc:  "pTheme"},
    { title: "pName", owner: "pOwner", stars: "pStars", bgc:  "pTheme"},
    { title: "pName", owner: "pOwner", stars: "pStars", bgc:  "pTheme"}
    // Pass value with 1, 2,, 3
    // on click function whe clicked it will s
  ]);

  console.log(cardInfo)
  return (
    <>
  {/* calling ProfilePageCards2 and fetching from reducer and injecting with props */}
    {mapPlaylists()}
   {/* <ProfilePageCards2 data={cardInfo[0]} />
   <ProfilePageCards2 data={cardInfo[1]} />
   <ProfilePageCards2 data={cardInfo[2]} /> */}
    
   <NewPlaylistBtn />
    </>
  )
  }
export default UserPage



