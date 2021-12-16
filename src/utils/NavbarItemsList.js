const NavbarItems = [
  {
    id: 0,
    name: "Movies",
    route: "/",
    children: [
      {
        id: 11,
        name: "Popular",
        route: "movie/popular",
      },
      {
        id: 12,
        name: "Now Playing",
        route: "movie/nowplaying",
      },
      {
        id: 13,
        name: "Upcoming",
        route: "movie/upcoming",
      },
      {
        id: 14,
        name: "Top Rated",
        route: "movie/toprated",
      },
    ],
  },
  {
    id: 1,
    name: "Tv Shows",
    route: "/",
    children: [
      {
        id: 11,
        name: "Popular",
        route: "tvshows/popular",
      },
      {
        id: 12,
        name: "Airing Today",
        route: "tvshows/airingtoday",
      },
      {
        id: 13,
        name: "On TV",
        route: "tvshows/ontv",
      },
      {
        id: 14,
        name: "Top Rated",
        route: "tvshows/toprated",
      },
    ],
  },
  {
    id: 2,
    name: "People",
    route: "/",
    children: [
      {
        id: 11,
        name: "Popular People",
        route: "person",
      },
    ],
  },
  {
    id: 3,
    name: "More",
    route: "/",
    children: [
      {
        id: 11,
        name: "Discussions",
        route: "discuss",
      },
      {
        id: 12,
        name: "Leaderboard",
        route: "leaderboard",
      },
      {
        id: 13,
        name: "Support",
        route: "support",
      },
      {
        id: 14,
        name: "API",
        route: "api",
      },
    ],
  },
]

export default NavbarItems
