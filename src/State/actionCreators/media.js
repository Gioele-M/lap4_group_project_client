import axios from 'axios'


export const fetchMedia = () => {
  return async (dispatch) => {
    try {
      console.log('* Fetching Media')
      dispatch({ type: 'FETCHING_MEDIA' })
      const data = await axios(`http://localhost:5000/temptrending`)

      // console.log('Got Media data -> ', data)
      dispatch({ type: 'FETCH_MEDIA', payload: data })
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

      const data = await axios.patch(
        'http://localhost:5000/playlist/patch',
        newData
      )

      if (data.error) {
        throw new Error(data.error)
      }
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
      dispatch({ type: 'CREATE_PLAYLIST', payload: data })
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err })
      console.log('Error posting new playlist: ', err)
    }
  }
}
