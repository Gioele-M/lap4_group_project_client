import axios from 'axios'

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
