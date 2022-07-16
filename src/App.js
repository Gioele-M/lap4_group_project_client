import { Routes, Route } from 'react-router-dom'
import { HomePage, UserPage, PlaylistPage, AboutPage } from './Pages'
import { DebugComponent } from './Components'
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {/* Debug Component
      check browser console or Redux DevTools to chec the State */}
      <DebugComponent />
      <p>Footer</p>
    </div>
  )
}

export default App
