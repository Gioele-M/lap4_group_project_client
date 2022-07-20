import axios from 'axios'


export const fetchMedia = (request) => {
  // const hardcodedData = {
  //   playlistName: 'playlistX',
  // }
  return async (dispatch) => {
    try {
      console.log('* Fetching Media')
      dispatch({ type: 'FETCHING_MEDIA' })
      const data = await axios.post(
        `http://localhost:5000/playlist/search`,
        request
      )

      if (data.error) {
        throw new Error(data.error)
      }

      console.log('Got Media data -> ', data)
      dispatch({ type: 'FETCH_MEDIA', payload: data })
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err })
      console.log('Error fetching Media: ', err)
    }
  }
}


export const fetchTrending = () => {
  // const hardcodedData = {
  //   playlistName: 'playlistX',
  // }
  return async (dispatch) => {
    try {
      console.log('* Trending Playlist Media')
      dispatch({ type: 'FETCHING_TRENDING' })
      const data = await axios.get(
        `http://localhost:5000/playlist/trending`)

      if (data.error) {
        throw new Error(data.error)
      }

      console.log('Got Media data -> ', data)
      dispatch({ type: 'FETCH_TRENDING', payload: data })
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err })
      console.log('Error fetching Media: ', err)
    }
  }
}




export const patchMedia = (newData) => {
  return async (dispatch) => {
    try {
      console.log('* Patching Media')
      dispatch({ type: 'PATCHING_MEDIA' })

      console.log('NewData-> ', newData)

      const data = await axios.patch(
        'http://localhost:5000/playlist/patch',
        newData
      )

      if (data.error) {
        throw new Error(data.error)
      }

      console.log('PATCH MEDIA response data-> ', data)
      dispatch({ type: 'PATCH_DATA', payload: data })
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err })
      console.log('Error patching media: ', err)
    }
  }
}

export const deleteNote = (newData) => {
  return async (dispatch) => {
    try {
      console.log('* Deleting Note')
      dispatch({ type: 'DELETING_NOTE' })
      console.log('newData-> ', newData)

      const data = await axios.delete(
        'http://localhost:5000/playlist/delete',
        { data: newData },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (data.error) {
        throw new Error(data.error)
      }

      console.log('DELETE NOTE response data-> ', data)
      dispatch({ type: 'DELETE_NOTE', payload: data })
      fetchMedia()
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err })
      console.log('Error patching media: ', err)
    }
  }
}



// user creates a new playlist
export const createNewPL = ({ playlistName,userEmail, token }) => {
  return async (dispatch) => {
    try {
      console.log('* Create new playlist')
      dispatch({ type: 'CREATING_PLAYLIST' }) //MATTERO, we need help BANANAS!
      const data = await axios.post(`http://localhost:5000/playlist/new`, {
        playlistName,
        email: userEmail,
        token
      })
      if (data.error) {
        throw new Error(data.error)
      }
      console.log('* got user data -> ', data)
      dispatch({ type: 'CREATE_PLAYLIST', payload: data.data })
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err })
      console.log('Error posting new playlist: ', err)
    }
  }
}
