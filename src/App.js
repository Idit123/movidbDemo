import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Index"
import Home from "./pages"
import Popular from "./pages/Movies/Popular"
import NowPlaying from "./pages/Movies/NowPlaying"
import Upcoming from "./pages/Movies/Upcoming"
import TopRated from "./pages/Movies/TopRated"
import Error from "./pages/Error"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie">
          <Route path="popular" element={<Popular />} />
          <Route path="nowplaying" element={<NowPlaying />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="toprated" element={<TopRated />} />
        </Route>
        <Route path="tvshows"></Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
