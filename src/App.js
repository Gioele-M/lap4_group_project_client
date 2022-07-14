import { Routes, Route } from 'react-router-dom'
import { HomePage, UserPage, PlaylistPage } from './Pages'

function App() {
  return (
    <div className="App">
      <p>Header</p>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
      </Routes>
      <p>Footer</p>
    </div>
  )
}

export default App
