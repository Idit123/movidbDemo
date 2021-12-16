const apiCallLinkGenerator = (type, keyword) => {
  return `https://api.themoviedb.org/3/${type}/${keyword}?api_key=2093daba66a27dc4a8b953700c36e805&language=en-US&page=`
}

export const moviesApi = {
  popular: {
    title: "Popular Movies",
    url: apiCallLinkGenerator("movie", "popular"),
  },
  nowplaying: {
    title: "Now-Playing Movies",
    url: apiCallLinkGenerator("movie", "now_playing"),
  },
  upcoming: {
    title: "Upcoming Movies",
    url: apiCallLinkGenerator("movie", "upcoming"),
  },
  toprated: {
    title: "Top-Rated Movies",
    url: apiCallLinkGenerator("movie", "top_rated"),
  },
}
export const tvShowsApi = {
  popular: {
    title: "Popular TVShows",
    url: apiCallLinkGenerator("tv", "popular"),
  },
  airingtoday: {
    title: "AirToday TVShows",
    url: apiCallLinkGenerator("tv", "airing_today"),
  },
  ontv: {
    title: "OnTV TVShows",
    url: apiCallLinkGenerator("tv", "on_the_air"),
  },
  toprated: {
    title: "Top-Rated TVShows",
    url: apiCallLinkGenerator("tv", "top_rated"),
  },
}
export const personApi = {
  popular: {
    title: "Popular Person",
    url: apiCallLinkGenerator("person", "popular"),
  },
}
