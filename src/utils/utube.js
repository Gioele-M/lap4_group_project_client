import axios from 'axios'

const YOUTUBE_API_KEY = 'AIzaSyCwUJ2-lwfzksLa8b-bjWdYAvf5MLyiHKU'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 12,
    key: YOUTUBE_API_KEY,
  },
})
