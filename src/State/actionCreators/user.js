import axios from 'axios'

// login the user using for example a jwt
export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      console.log('* Fetching User')
      dispatch({ type: 'FETCHING_USER' })
      const data = await axios.post(`http://localhost:5000/user/login`, {
        email,
        password,
      })
      if (data.error) {
        throw new Error(data.error)
      }
      console.log('* got user data -> ', data)
      dispatch({ type: 'LOGIN_USER', payload: data })
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err })
      console.log('Error fetching User: ', err)
    }
  }
}

export const signupUser = ({ username, password, email }) => {
  return async (dispatch) => {
    try {
      console.log('* Signing up user')
      dispatch({ type: 'REGISTERING_USER' })
      const data = await axios.post(`http://localhost:5000/user/signup`, {
        username,
        password,
        email,
      })
      if (data.error) {
        throw new Error(data.error)
      }
      console.log('* Got user data back -> ', data)
      dispatch({ type: 'SIGNUP_USER', payload: data })
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err })
      console.log('Error: ', err)
    }
  }
}

export const logoutUser = (data) => {
  return { type: 'LOGOUT_USER', payload: data }
}
