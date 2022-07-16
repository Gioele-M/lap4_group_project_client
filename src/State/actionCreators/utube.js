import utube from '../../utils/utube'

export const fetchVideos = (term) => {
  return async (dispatch) => {
    try {
      console.log('== Fetching utube vids')
      dispatch({ type: 'FETCHING_VIDEOS' })
      const data = await utube.get('/search', {
        params: {
          q: term,
        },
      })
      console.log('utube - ', data.data.items)
      dispatch({ type: 'FETCH_VIDEOS', payload: data.data.items })
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err })
      console.log('Error fetching utube videos')
    }
  }
}
