import { Routes, Route } from 'react-router-dom'
import { HomePage, UserPage, PlaylistPage, AboutPage } from './Pages'
import { DebugComponent } from './Components'
import NavBar from './Components/NavBar/NavBar'
import TrendingTopics from './Components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <TrendingTopics/>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/debug" element={<DebugComponent />} />
      </Routes>
      <p>Footer</p>
    </div>
  )
}

export default App
