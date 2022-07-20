// // hardcoded data
// const data = {
//   data: [
//     {
//       _id: 'b49a866d572d45f0bed20c43ea40884c',
//       averageStars: {
//         currentRating: 3.5,
//         totalRatings: 2,
//         totalStars: 7,
//       },
//       chapters: [
//         {
//           chapterId: 1,
//           chapterTitle: 'first chapter',
//           end: '0.30',
//           start: '0.00',
//           text: 'This is the section with the notes on the first chapter',
//           video_url: 'youtube.com',
//         },
//       ],
//       commentSection: [
//         {
//           comment: 'This playlist is great!',
//           commentID: 1,
//           thread: [
//             {
//               reply: 'great indeed!',
//               timestamp: '00.00.00.10.05.22',
//               userEmail: 'gioele@gmail.com',
//               username: 'Gio',
//             },
//             {
//               reply: 'Looks great but I would add another section!',
//               timestamp: '00.00.00.10.05.22',
//               userEmail: 'igor@gmail.com',
//               username: 'Igor',
//             },
//           ],
//           timestamp: '00.00.00.10.05.22',
//           userEmail: 'matteo@gmail.com',
//           username: 'Matteo',
//         },
//       ],
//       editingAccess: ['gioele@gmail.com', 'igor@gmail.com'],
//       playlistName: 'playlistX',
//       playlistOwner: 'matteo@gmail.com',
//       playlistTheme: '(0,0,0)',
//       public: 'True',
//       tags: ['tag1', 'tag2'],
//       userStars: [
//         {
//           rating: 4,
//           userEmail: 'gioele@gmail.com',
//         },
//         {
//           rating: 3,
//           userEmail: 'igor@gmail.com',
//         },
//       ],
//     },
//     {},
//     {
//       _id: 'b49a866d572d45f0bed20c43ea40884b',
//       averageStars: {
//         currentRating: 0,
//         totalRatings: 0,
//         totalStars: 0,
//       },
//       chapters: [],
//       commentSection: [],
//       editingAccess: [],
//       playlistName: 'emptyPlaylist',
//       playlistOwner: 'igor@gmail.com',
//       playlistTheme: '(0,0,0)',
//       public: 'True',
//       tags: [],
//       userStars: [],
//     },
//   ],
// }


const data = {
  data: [
    {
      _id: 'b49a866d572d45f0bed20c43ea40884b',
      averageStars: {
        currentRating: 0,
        totalRatings: 0,
        totalStars: 0,
      },
      chapters: [
        {
            chapterId: 1,
            chapterTitle: 'first chapter',
            end: '0.30',
            start: '0.00',
            text: 'Hard coded one',
            video_url: 'youtube.com',
          }
      ],
      commentSection: [],
      editingAccess: [],
      playlistName: 'emptyPlaylist',
      playlistOwner: '',
      playlistTheme: '(0,0,0)',
      public: 'True',
      tags: [],
      userStars: [],
    },
  ],
}



// const data = {
//   data: [],
// }

// //  end hardcoded data

const initState = {
  data,
  loading: false,
  error: false,
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
      // console.log('ACTION PAYLOAD: ', action.payload)
      return { data: action.payload, loading: false, error: false }

    case 'PATCH_MEDIA':
      return { data: action.payload, loading: false, error: false }

    case 'PATCHING_MEDIA':
      return { ...state, loading: true, error: false }

    case 'DELETING_NOTE':
      return { ...state, loading: true, error: false }

    case 'DELETE_NOTE':
      return {...state, data:{data: [action.payload.data]}, loading: false, error: false }

      case 'CREATING_PLAYLIST':
        return { ...state, loading: true, error: false }

      case 'CREATE_PLAYLIST':
        return { data: action.payload, loading: false, error: false }
  
      
    default:
      return state
  }
}
