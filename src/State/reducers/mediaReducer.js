// hardcoded data
const data = {
  averageStars: {
    currentRating: 4.0,
    totalRatings: 5,
    totalStars: 20,
  },
  chapters: [
    {
      chapter1: {
        chapterTitle: 'Initial Chapter',
        end: '0.40',
        keywords: [],
        start: '0.00',
        text: 'Original: This is the section with the notes on the first chapter',
        video_url: 'https://www.youtube.com/watch?v=UuAY6Lxkppw',
      },
    },
  ],
  commentSection: [
    {
      comment: 'Wow! :)',
      commentID: 1,
      thread: [
        {
          reply: 'Super indeed!',
          timestamp: '00.00.00.10.05.22',
          userEmail: 'gioele@gmail.com',
          username: 'Gio',
        },
        {
          reply: 'Looks great but I would add another section!',
          timestamp: '00.00.00.10.05.22',
          userEmail: 'igor@gmail.com',
          username: 'Igor',
        },
      ],
      timestamp: '00.00.00.10.05.22',
      userEmail: 'matteo@gmail.com',
      username: 'Matteo',
    },
  ],
  editingAccess: ['gioele@gmail.com', 'igor@gmail.com'],
  playlistName: 'playlistX',
  playlistOwner: 'john@gmail.com',
  playlistTheme: '(1,1,1)',
  public: true,
  userStars: [
    {
      rating: 4,
      userEmail: 'gioele@gmail.com',
    },
    {
      rating: 5,
      userEmail: 'igor@gmail.com',
    },
  ],
}

//  end hardcoded data

const initState = {
  data,
}

export const mediaReducer = (state = initState, action) => {
  switch (action.type) {
    // pretend fetching data from the DB

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
