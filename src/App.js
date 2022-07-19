import { Routes, Route } from 'react-router-dom'
import {
  HomePage,
  UserPage,
  PlaylistPage,
  AboutPage,
  SearchResultPage,
  NotFound
} from './Pages'
// import { DebugComponent } from './Components'
import NavBar from './Components/NavBar/NavBar'

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

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        {/* <Route path="/debug" element={<DebugComponent />} /> */}
        <Route path="*" element={<NotFound />} />

      </Routes>
     
      <Footer />
    </div>
  )
}

export default App
