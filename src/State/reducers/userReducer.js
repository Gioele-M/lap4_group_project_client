// hardcoded data

// const user = {
//   achievement: ['badgeOne', 'badgeTwo'],
//   favourites: ['playlistNameOne', 'playlistNameTwo'],
//   hashedPassword: 'rememberNotToSendPwBack',
//   lastSelection: {
//     selectedNote: 'chapter1',
//     selectedPlaylist: 'playlistNameWOWOW',
//   },
//   previousTokens: ['tokenOne', 'tokenTwo'],
//   recentNotes: [
//     {
//       selectedNote: 'chapter2',
//       selectedPlaylist: 'playlistNameYAYAYY',
//     },
//     {
//       selectedNote: 'chapter3',
//       selectedPlaylist: 'playlistNameWhoohoo',
//     },
//   ],
//   token: 'just_token_string',
//   userEmail: 'john@gmail.com',
//   username: 'John Smith',
// }

const user = {
  achievement: [],
  favourites: [],
  hashedPassword: '',
  lastSelection: {
    selectedNote: '',
    selectedPlaylist: '',
  },
  previousTokens: [],
  recentNotes: [
    {
      selectedNote: '',
      selectedPlaylist: '',
    },
    {
      selectedNote: '',
      selectedPlaylist: '',
    },
  ],
  token: '',
  userEmail: '',
  username: '',
}



// initialState

const initState = {
  user,
  loading: false,
  error: false,
}

// reducers from here

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_USER':
      return { user: action.payload.data, loading: false, error: false }

    case 'REGISTERING_USER':
      return { ...state, loading: true, error: false }

    case 'LOGIN_USER':
      return {...state, user: action.payload.data, loading: false, error: false }

    case 'LOGOUT_USER':
      return {
        user: {},
        loading: false,
        error: false,
      }

    case 'FETCHING_USER':
      return { ...state, loading: true, error: false }

    case 'SET_ERROR':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
