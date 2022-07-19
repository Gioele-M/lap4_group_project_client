import { Routes, Route } from 'react-router-dom'
import {
  HomePage,
  UserPage,
  PlaylistPage,
  AboutPage,
  SearchResultPage,
} from './Pages'
// import { DebugComponent } from './Components'
import NavBar from './Components/NavBar/NavBar'
import TrendingTopics from './Components/Carousel'

import { Footer } from './layout'
import 'bootstrap/dist/css/bootstrap.min.css'
{
  /* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */
}
;<link
  href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap"
  rel="stylesheet"
></link>

function App() {
  return (
    <div className="App">
      <NavBar />
      <TrendingTopics />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        {/* <Route path="/debug" element={<DebugComponent />} /> */}
      </Routes>
      <p>Footer</p>
      <Footer />
    </div>
  )
}

export default App
