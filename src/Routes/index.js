import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavbarComponent from "../components/Navbar"
import Home from "../pages"
import MoviesPopular from "../pages/Movies/Popular"
import MoviesNowPlaying from "../pages/Movies/NowPlaying"
import MoviesUpcoming from "../pages/Movies/Upcoming"
import MoviesTopRated from "../pages/Movies/TopRated"
import TvShowsPopular from "../pages/TvShows/Popular"
import TvShowsAiringToday from "../pages/TvShows/AiringToday"
import TvShowsOnTv from "../pages/TvShows/OnTv"
import TvShowsTopRated from "../pages/TvShows/TopRated"
import PeoplePopular from "../pages/People/Popular"
import Discuss from "../pages/More/Discuss"
import LeaderBoard from "../pages/More//LeaderBoard"
import Support from "../pages/More//Support"
import API from "../pages/More/API"
import Error from "../pages/Error"
import CardDetailsPage from "../pages/CardDetailspage"

const Router = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie">
          <Route path=":id" element={<CardDetailsPage />} />
          <Route path="popular" element={<MoviesPopular />} />
          <Route path="nowplaying" element={<MoviesNowPlaying />} />
          <Route path="upcoming" element={<MoviesUpcoming />} />
          <Route path="toprated" element={<MoviesTopRated />} />
        </Route>
        <Route path="tv">
          <Route path=":id" element={<CardDetailsPage />} />
          <Route path="popular" element={<TvShowsPopular />} />
          <Route path="airingtoday" element={<TvShowsAiringToday />} />
          <Route path="ontv" element={<TvShowsOnTv />} />
          <Route path="toprated" element={<TvShowsTopRated />} />
        </Route>
        <Route path="person" element={<PeoplePopular />} />
        <Route path="discuss" element={<Discuss />}></Route>
        <Route path="leaderboard" element={<LeaderBoard />}></Route>
        <Route path="support" element={<Support />}></Route>
        <Route path="api" element={<API />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
