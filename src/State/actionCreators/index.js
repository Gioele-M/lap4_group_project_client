import axios from 'axios'

// STUBS

// // //
// USER credentials

// signup the user
export const signupUser = (data) => ({ type: 'SIGNUP_USER', payload: data })

// logout the user
export const logoutUser = (data) => ({ type: 'LOGOUT_USER', payload: data })

// login the user using for example a jwt
export const loginUser = (creds) => {
  return async (dispatch) => {
    try {
      console.log('* Fetching User')
      dispatch({ type: 'FETCHING_USER' })
      const data = await axios(`https://wewacademy.herokuapp.com/userSample`)
      console.log('* got user data -> ', data)
      dispatch({ type: 'LOGIN_USER', payload: data })
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err })
      console.log('Error fetching User: ', err)
    }
  }
}

// // //
// User Playlists

// save the current note every time the user clicks
// or everytime a new video is started in autoplay
export const setCurrentNote = (data) => ({
  type: 'SET_CURRENT_NOTE',
  payload: data,
})

// get all data in regards to the notes and playlists
// might be the only get really needed when it
// comes to the notes and playlists
export const fetchMediaData = (mediaData) => ({
  type: 'FETCH_MEDIA_DATA',
  payload: mediaData,
})

export const fetchDebug = (username) => {
  return async (dispatch) => {
    try {
      // dispatch({ type: "STARTING_FETCH" })
      const data = await axios(`https://api.github.com/users/${username}`)
      dispatch({ type: 'FETCH_GITHUB', payload: data })
    } catch (err) {
      // dispatch({ type: "SET_ERROR", payload: err })
      console.log('Error: ', err)
    }
  }
}

export const fetchMedia = () => {
  return async (dispatch) => {
    try {
      console.log('* Fetching Media')
      dispatch({ type: 'FETCHING_MEDIA' })
      const data = await axios(
        `https://wewacademy.herokuapp.com/playlistSample`
      )
      console.log('Got Media data -> ', data)
      dispatch({ type: 'FETCH_MEDIA', payload: data })
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err })
      console.log('Error fetching Media: ', err)
    }
  }
}
