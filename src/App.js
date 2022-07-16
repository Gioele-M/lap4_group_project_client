import { Routes, Route } from 'react-router-dom'
import { HomePage, UserPage, PlaylistPage } from './Pages'
import { DebugComponent } from './Components'
import NavBar from './Components/NavBar/NavBar'
import AboutPage from './Pages/AboutPage'

function App() {
  return (
    <div className="App">
      <p>Header</p>.
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
