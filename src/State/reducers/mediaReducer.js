import { Note } from '../../models/note'

const note1 = new Note(
  'I am learning how to make a fullstack app with flask and react',
  'https://www.youtube.com/watch?v=hQAHSlTtcmY&t=1381s'
)

const note2 = new Note(
  'I am trying to learn how to make a a cake with react',
  'https://www.youtube.com/watch?v=hQAHSlTtcmY&t=1381s'
)

const note3 = new Note(
  'I am learning about biology',
  'https://www.youtube.com/watch?v=hQAHSlTtcmY&t=1381s'
)

const note4 = new Note(
  'I am tryingabout chemistry',
  'https://www.youtube.com/watch?v=hQAHSlTtcmY&t=1381s'
)

const data = {
  currentNote: note1,
  playlists: [
    [note2, note1, note2],
    [note2, note2, note2],
    [note1, note1, note2],
  ],
}

const initState = {
  data,
}

export const mediaReducer = (state = initState, action) => {
  switch (action.type) {
    // pretend fetching data from the DB
    case 'FETCH_MEDIA_DATA':
      return {
        ...state,
        data: {
          currentNote: note3,
          playlists: [
            [note3, note1, note4],
            [note1, note2, note4],
            [note1, note2, note3],
            [note3, note2, note1],
          ],
        },
      }

    case 'FETCH_GITHUB':
      return action.payload

    case 'FETCHING_MEDIA':
      return { ...state, loading: true, error: false }

    case 'SET_ERROR':
      return { ...state, loading: false, error: action.payload }

    case 'FETCH_MEDIA':
      return { data: action.payload, loading: false, error: false }

    default:
      return state
  }
}
