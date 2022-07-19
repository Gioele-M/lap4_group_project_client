import axios from 'axios'

export const fetchMedia = () => {
  return async (dispatch) => {
    try {
      console.log('* Fetching Media')
      dispatch({ type: 'FETCHING_MEDIA' })
      const data = await axios(`http://localhost:5000/allplaylists`)

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

      console.log('NewData-> ', newData)

      const data = await axios.patch(
        'http://localhost:5000/playlist/patch',
        newData
      )

      console.log('PATCH MEDIA Data-> ', data)
      dispatch({ type: 'PATCH_DATA', payload: data })

      if (data.error) {
        throw new Error(data.error)
      }
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err })
      console.log('Error patching media: ', err)
    }
  }
}
