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
