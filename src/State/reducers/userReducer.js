// hardcoded data

const user = {
  id: 123,
  name: 'John Smith',
  email: 'john@email.com',
  password: 'johnpw',
}

// initialState

const initState = {
  user,
}

// reducers from here

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_USER':
      return state

    case 'LOGIN_USER':
      return { user: action.payload, loading: false, error: false }

    case 'LOGOUT_USER':
      return state

    case 'FETCHING_USER':
      return { ...state, loading: true, error: false }

    case 'SET_ERROR':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
