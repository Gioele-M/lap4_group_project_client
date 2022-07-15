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
      return state

    case 'LOGOUT_USER':
      return state

    default:
      return state
  }
}
