import { Routes, Route } from 'react-router-dom'
import { HomePage, UserPage, PlaylistPage } from './Pages'
import { DebugComponent } from './Components'

function App() {
  return (
    <div className="App">
      <p>Header</p>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
      </Routes>
      {/* Debug Component
      check browser console or Redux DevTools to chec the State */}
      <DebugComponent />
      <p>Footer</p>
    </div>
  )
}

export default App
