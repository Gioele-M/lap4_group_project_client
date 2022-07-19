// hardcoded data
const data = {
  data: [
    {
      averageStars: {
        currentRating: 3.5,
        totalRatings: 2,
        totalStars: 7,
      },
      chapters: [
        {
          chapterId: 1,
          chapterTitle: 'INITSTATE Why containers are useful',
          end: '1.30',
          start: '0.00',
          text: "INITSTATE Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          video_url: 'https://www.youtube.com/watch?v=_dfLOzuIg2o',
        },
        {
          chapterId: 2,
          chapterTitle: 'INITSTATE Introduction to containers',
          end: '4.30',
          start: '1.00',
          text: 'INITSTATE Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
          video_url: 'https://www.youtube.com/watch?v=cjXI-yxqGTI',
        },
        {
          chapterId: 3,
          chapterTitle: 'Second part of containers',
          end: '8.30',
          start: '5.00',
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          video_url: 'https://www.youtube.com/watch?v=pxwUXJmAER4',
        },
        {
          chapterId: 4,
          chapterTitle: 'Introduction to docker',
          end: '4.30',
          start: '1.00',
          text: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
          video_url: 'https://www.youtube.com/watch?v=eGz9DS-aIeY',
        },
        {
          chapterId: 5,
          chapterTitle: 'Usage of docker',
          end: '3.30',
          start: '0.00',
          text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
          video_url: 'https://www.youtube.com/watch?v=XCWWPpfdbsM',
        },
        {
          chapterId: 6,
          chapterTitle: 'Conclusions',
          end: '6.30',
          start: '5.00',
          text: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
          video_url: 'https://www.youtube.com/watch?v=mRMmlo_Uqcs',
        },
      ],
      commentSection: [
        {
          comment: 'This playlist is great :)',
          commentID: 1,
          thread: [
            {
              reply: 'great indeed!',
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
      playlistName: 'playlistA',
      playlistOwner: 'matteo@gmail.com',
      playlistTheme: '(0,0,0)',
      public: true,
      tags: ['tag1', 'tag2'],
      userStars: [
        {
          rating: 4,
          userEmail: 'gioele@gmail.com',
        },
        {
          rating: 3,
          userEmail: 'igor@gmail.com',
        },
      ],
    },
    {
      averageStars: {
        currentRating: 3.5,
        totalRatings: 2,
        totalStars: 7,
      },
      chapters: [
        {
          chapterId: 1,
          chapterTitle: 'first chapter',
          end: '0.30',
          start: '0.00',
          text: 'This is the section with the notes on the first chapter',
          video_url: 'youtube.com',
        },
      ],
      commentSection: [
        {
          comment: 'This playlist is great :)',
          commentID: 1,
          thread: [
            {
              reply: 'great indeed!',
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
      playlistName: 'playlistB',
      playlistOwner: 'matteo@gmail.com',
      playlistTheme: '(0,0,0)',
      public: true,
      tags: ['tag1', 'tag2'],
      userStars: [
        {
          rating: 4,
          userEmail: 'gioele@gmail.com',
        },
        {
          rating: 3,
          userEmail: 'igor@gmail.com',
        },
      ],
    },
    {
      averageStars: {
        currentRating: 3.5,
        totalRatings: 2,
        totalStars: 7,
      },
      chapters: [
        {
          chapterId: 1,
          chapterTitle: 'first chapter',
          end: '0.30',
          start: '0.00',
          text: 'This is the section with the notes on the first chapter',
          video_url: 'youtube.com',
        },
      ],
      commentSection: [
        {
          comment: 'This playlist is great :)',
          commentID: 1,
          thread: [
            {
              reply: 'great indeed!',
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
      playlistName: 'playlistC',
      playlistOwner: 'matteo@gmail.com',
      playlistTheme: '(0,0,0)',
      public: true,
      tags: ['tag1', 'tag2'],
      userStars: [
        {
          rating: 4,
          userEmail: 'gioele@gmail.com',
        },
        {
          rating: 3,
          userEmail: 'igor@gmail.com',
        },
      ],
    },
    {
      averageStars: {
        currentRating: 3.5,
        totalRatings: 2,
        totalStars: 7,
      },
      chapters: [
        {
          chapterId: 1,
          chapterTitle: 'first chapter',
          end: '0.30',
          start: '0.00',
          text: 'This is the section with the notes on the first chapter',
          video_url: 'youtube.com',
        },
      ],
      commentSection: [
        {
          comment: 'This playlist is great :)',
          commentID: 1,
          thread: [
            {
              reply: 'great indeed!',
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
      playlistName: 'playlistD',
      playlistOwner: 'matteo@gmail.com',
      playlistTheme: '(0,0,0)',
      public: true,
      tags: ['tag1', 'tag2'],
      userStars: [
        {
          rating: 4,
          userEmail: 'gioele@gmail.com',
        },
        {
          rating: 3,
          userEmail: 'igor@gmail.com',
        },
      ],
    },
    {
      averageStars: {
        currentRating: 3.5,
        totalRatings: 2,
        totalStars: 7,
      },
      chapters: [
        {
          chapterId: 1,
          chapterTitle: 'first chapter',
          end: '0.30',
          start: '0.00',
          text: 'This is the section with the notes on the first chapter',
          video_url: 'youtube.com',
        },
      ],
      commentSection: [
        {
          comment: 'This playlist is great :)',
          commentID: 1,
          thread: [
            {
              reply: 'great indeed!',
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
      playlistName: 'playlistE',
      playlistOwner: 'matteo@gmail.com',
      playlistTheme: '(0,0,0)',
      public: true,
      tags: ['tag1', 'tag2'],
      userStars: [
        {
          rating: 4,
          userEmail: 'gioele@gmail.com',
        },
        {
          rating: 3,
          userEmail: 'igor@gmail.com',
        },
      ],
    },
    {
      averageStars: {
        currentRating: 3.5,
        totalRatings: 2,
        totalStars: 7,
      },
      chapters: [
        {
          chapterId: 1,
          chapterTitle: 'first chapter',
          end: '0.30',
          start: '0.00',
          text: 'This is the section with the notes on the first chapter',
          video_url: 'youtube.com',
        },
      ],
      commentSection: [
        {
          comment: 'This playlist is great :)',
          commentID: 1,
          thread: [
            {
              reply: 'great indeed!',
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
      playlistName: 'playlistF',
      playlistOwner: 'matteo@gmail.com',
      playlistTheme: '(0,0,0)',
      public: true,
      tags: ['tag1', 'tag2'],
      userStars: [
        {
          rating: 4,
          userEmail: 'gioele@gmail.com',
        },
        {
          rating: 3,
          userEmail: 'igor@gmail.com',
        },
      ],
    },
    {
      averageStars: {
        currentRating: 3.5,
        totalRatings: 2,
        totalStars: 7,
      },
      chapters: [
        {
          chapterId: 1,
          chapterTitle: 'first chapter',
          end: '0.30',
          start: '0.00',
          text: 'This is the section with the notes on the first chapter',
          video_url: 'youtube.com',
        },
      ],
      commentSection: [
        {
          comment: 'This playlist is great :)',
          commentID: 1,
          thread: [
            {
              reply: 'great indeed!',
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
      playlistName: 'playlistG',
      playlistOwner: 'matteo@gmail.com',
      playlistTheme: '(0,0,0)',
      public: true,
      tags: ['tag1', 'tag2'],
      userStars: [
        {
          rating: 4,
          userEmail: 'gioele@gmail.com',
        },
        {
          rating: 3,
          userEmail: 'igor@gmail.com',
        },
      ],
    },
    {
      averageStars: {
        currentRating: 3.5,
        totalRatings: 2,
        totalStars: 7,
      },
      chapters: [
        {
          chapterId: 1,
          chapterTitle: 'first chapter',
          end: '0.30',
          start: '0.00',
          text: 'This is the section with the notes on the first chapter',
          video_url: 'youtube.com',
        },
      ],
      commentSection: [
        {
          comment: 'This playlist is great :)',
          commentID: 1,
          thread: [
            {
              reply: 'great indeed!',
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
      playlistName: 'playlistH',
      playlistOwner: 'matteo@gmail.com',
      playlistTheme: '(0,0,0)',
      public: true,
      tags: ['tag1', 'tag2'],
      userStars: [
        {
          rating: 4,
          userEmail: 'gioele@gmail.com',
        },
        {
          rating: 3,
          userEmail: 'igor@gmail.com',
        },
      ],
    },
    {
      averageStars: {
        currentRating: 3.5,
        totalRatings: 2,
        totalStars: 7,
      },
      chapters: [
        {
          chapterId: 1,
          chapterTitle: 'first chapter',
          end: '0.30',
          start: '0.00',
          text: 'This is the section with the notes on the first chapter',
          video_url: 'youtube.com',
        },
      ],
      commentSection: [
        {
          comment: 'This playlist is great :)',
          commentID: 1,
          thread: [
            {
              reply: 'great indeed!',
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
      playlistName: 'playlistI',
      playlistOwner: 'matteo@gmail.com',
      playlistTheme: '(0,0,0)',
      public: true,
      tags: ['tag1', 'tag2'],
      userStars: [
        {
          rating: 4,
          userEmail: 'gioele@gmail.com',
        },
        {
          rating: 3,
          userEmail: 'igor@gmail.com',
        },
      ],
    },
    {
      averageStars: {
        currentRating: 0,
        totalRatings: 0,
        totalStars: 0,
      },
      chapters: [],
      commentSection: [],
      editingAccess: ['gioele@gmail.com', 'igor@gmail.com'],
      playlistName: 'empty playlist',
      playlistOwner: 'matteo@gmail.com',
      playlistTheme: '(0,0,0)',
      public: true,
      tags: ['tag1', 'tag2'],
      userStars: [],
    },
  ],
}

//  end hardcoded data

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

    default:
      return state
  }
}
