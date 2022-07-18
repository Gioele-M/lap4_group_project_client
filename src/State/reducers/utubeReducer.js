const initState = {
  videos: [],
}

export const utubeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_VIDEOS':
      return { videos: action.payload, loading: false, error: false }

    case 'FETCHING_VIDEOS':
      return { ...state, loading: true, error: false }

    case 'SET_ERROR':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
