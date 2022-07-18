// hardcoded data

const user = {
  achievement: ['badgeOne', 'badgeTwo'],
  favourites: ['playlistNameOne', 'playlistNameTwo'],
  hashedPassword: 'rememberNotToSendPwBack',
  lastSelection: {
    selectedNote: 'chapter1',
    selectedPlaylist: 'playlistNameWOWOW',
  },
  previousTokens: ['tokenOne', 'tokenTwo'],
  recentNotes: [
    {
      selectedNote: 'chapter2',
      selectedPlaylist: 'playlistNameYAYAYY',
    },
    {
      selectedNote: 'chapter3',
      selectedPlaylist: 'playlistNameWhoohoo',
    },
  ],
  token: 'just_token_string',
  userEmail: 'john@gmail.com',
  username: 'John Smith',
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
