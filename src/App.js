import { Routes, Route } from 'react-router-dom'
import { HomePage, UserPage, PlaylistPage, AboutPage, SearchResultPage } from './Pages'
// import { DebugComponent } from './Components'
import NavBar from './Components/NavBar/NavBar'
import { Footer } from './layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Components/Signup';
{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap" rel="stylesheet"></link>;
//TOM ADD THE FOLLOWING CND'S FOR THE SIGNUP MODAL:
{/* <script crossorigin src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"></script>;
<script crossorigin src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>;
<script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}

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
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/debug" element={<DebugComponent />} /> */}
      </Routes>
      <p>Footer</p>
      <Footer />
    </div>
  )
}

export default App
