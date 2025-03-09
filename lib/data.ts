export type Movie = {
  id: string
  title: string
  year: number
  director: string
  genre: string[]
  rating: number
  runtime: number
  poster: string
  backdrop: string
  overview: string
  releaseDate: string
  status: "published" | "draft" | "archived"
  createdAt: string
  updatedAt: string
}

export type User = {
  id: string
  name: string
  email: string
  role: "admin" | "moderator" | "user"
  avatar: string
  status: "active" | "suspended"
  createdAt: string
}

export type Review = {
  id: string
  movieId: string
  userId: string
  userName: string
  userAvatar: string
  rating: number
  comment: string
  status: "approved" | "pending" | "rejected"
  createdAt: string
}

export type AnalyticsData = {
  viewsByMonth: { month: string; views: number }[]
  genreDistribution: { genre: string; count: number }[]
  ratingDistribution: { rating: string; count: number }[]
  topMovies: { title: string; views: number }[]
}

// Dummy Movies Data
export const movies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    runtime: 148,
    poster: "/placeholder.svg?height=500&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releaseDate: "2010-07-16",
    status: "published",
    createdAt: "2023-01-15T12:00:00Z",
    updatedAt: "2023-01-15T12:00:00Z",
  },
  {
    id: "2",
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    runtime: 152,
    poster: "/placeholder.svg?height=500&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseDate: "2008-07-18",
    status: "published",
    createdAt: "2023-01-16T12:00:00Z",
    updatedAt: "2023-01-16T12:00:00Z",
  },
  {
    id: "3",
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genre: ["Crime", "Drama"],
    rating: 8.9,
    runtime: 154,
    poster: "/placeholder.svg?height=500&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releaseDate: "1994-10-14",
    status: "published",
    createdAt: "2023-01-17T12:00:00Z",
    updatedAt: "2023-01-17T12:00:00Z",
  },
  {
    id: "4",
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: ["Drama"],
    rating: 9.3,
    runtime: 142,
    poster: "/placeholder.svg?height=500&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseDate: "1994-09-23",
    status: "published",
    createdAt: "2023-01-18T12:00:00Z",
    updatedAt: "2023-01-18T12:00:00Z",
  },
  {
    id: "5",
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    genre: ["Crime", "Drama"],
    rating: 9.2,
    runtime: 175,
    poster: "/placeholder.svg?height=500&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseDate: "1972-03-24",
    status: "published",
    createdAt: "2023-01-19T12:00:00Z",
    updatedAt: "2023-01-19T12:00:00Z",
  },
  {
    id: "6",
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
    runtime: 169,
    poster: "/placeholder.svg?height=500&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseDate: "2014-11-07",
    status: "published",
    createdAt: "2023-01-20T12:00:00Z",
    updatedAt: "2023-01-20T12:00:00Z",
  },
  {
    id: "7",
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski, Lilly Wachowski",
    genre: ["Action", "Sci-Fi"],
    rating: 8.7,
    runtime: 136,
    poster: "/placeholder.svg?height=500&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releaseDate: "1999-03-31",
    status: "published",
    createdAt: "2023-01-21T12:00:00Z",
    updatedAt: "2023-01-21T12:00:00Z",
  },
  {
    id: "8",
    title: "Parasite",
    year: 2019,
    director: "Bong Joon Ho",
    genre: ["Comedy", "Drama", "Thriller"],
    rating: 8.6,
    runtime: 132,
    poster: "/placeholder.svg?height=500&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    releaseDate: "2019-10-11",
    status: "published",
    createdAt: "2023-01-22T12:00:00Z",
    updatedAt: "2023-01-22T12:00:00Z",
  },
  {
    id: "9",
    title: "Avengers: Endgame",
    year: 2019,
    director: "Anthony Russo, Joe Russo",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.4,
    runtime: 181,
    poster: "/placeholder.svg?height=500&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    releaseDate: "2019-04-26",
    status: "published",
    createdAt: "2023-01-23T12:00:00Z",
    updatedAt: "2023-01-23T12:00:00Z",
  },
  {
    id: "10",
    title: "Joker",
    year: 2019,
    director: "Todd Phillips",
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.4,
    runtime: 122,
    poster: "/placeholder.svg?height=500&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    releaseDate: "2019-10-04",
    status: "published",
    createdAt: "2023-01-24T12:00:00Z",
    updatedAt: "2023-01-24T12:00:00Z",
  },
  {
    id: "11",
    title: "Dune",
    year: 2021,
    director: "Denis Villeneuve",
    genre: ["Action", "Adventure", "Drama"],
    rating: 8.0,
    runtime: 155,
    poster: "/placeholder.svg?height=500&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
    releaseDate: "2021-10-22",
    status: "published",
    createdAt: "2023-01-25T12:00:00Z",
    updatedAt: "2023-01-25T12:00:00Z",
  },
  {
    id: "12",
    title: "No Time to Die",
    year: 2021,
    director: "Cary Joji Fukunaga",
    genre: ["Action", "Adventure", "Thriller"],
    rating: 7.3,
    runtime: 163,
    poster: "/placeholder.svg?height=500&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    overview:
      "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    releaseDate: "2021-09-30",
    status: "draft",
    createdAt: "2023-01-26T12:00:00Z",
    updatedAt: "2023-01-26T12:00:00Z",
  },
]

// Dummy Users Data
export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    createdAt: "2023-01-01T12:00:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "moderator",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    createdAt: "2023-01-02T12:00:00Z",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "user",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    createdAt: "2023-01-03T12:00:00Z",
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    role: "user",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    createdAt: "2023-01-04T12:00:00Z",
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "user",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "suspended",
    createdAt: "2023-01-05T12:00:00Z",
  },
  {
    id: "6",
    name: "Diana Prince",
    email: "diana.prince@example.com",
    role: "moderator",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    createdAt: "2023-01-06T12:00:00Z",
  },
  {
    id: "7",
    name: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    role: "user",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    createdAt: "2023-01-07T12:00:00Z",
  },
]

// Dummy Reviews Data
export const reviews: Review[] = [
  {
    id: "1",
    movieId: "1",
    userId: "3",
    userName: "Bob Johnson",
    userAvatar: "/placeholder.svg?height=40&width=40",
    rating: 9,
    comment: "One of the most mind-bending movies I've ever seen. Christopher Nolan is a genius!",
    status: "approved",
    createdAt: "2023-02-01T12:00:00Z",
  },
  {
    id: "2",
    movieId: "1",
    userId: "4",
    userName: "Alice Williams",
    userAvatar: "/placeholder.svg?height=40&width=40",
    rating: 8,
    comment: "Great concept and execution, but the ending left me a bit confused.",
    status: "approved",
    createdAt: "2023-02-02T12:00:00Z",
  },
  {
    id: "3",
    movieId: "2",
    userId: "3",
    userName: "Bob Johnson",
    userAvatar: "/placeholder.svg?height=40&width=40",
    rating: 10,
    comment: "Heath Ledger's performance as the Joker is legendary. One of the best superhero movies ever made.",
    status: "approved",
    createdAt: "2023-02-03T12:00:00Z",
  },
  {
    id: "4",
    movieId: "3",
    userId: "5",
    userName: "Charlie Brown",
    userAvatar: "/placeholder.svg?height=40&width=40",
    rating: 9,
    comment: "Tarantino at his best. The non-linear storytelling is brilliant.",
    status: "pending",
    createdAt: "2023-02-04T12:00:00Z",
  },
  {
    id: "5",
    movieId: "4",
    userId: "7",
    userName: "Ethan Hunt",
    userAvatar: "/placeholder.svg?height=40&width=40",
    rating: 10,
    comment:
      "A masterpiece about hope and redemption. Morgan Freeman and Tim Robbins deliver outstanding performances.",
    status: "pending",
    createdAt: "2023-02-05T12:00:00Z",
  },
  {
    id: "6",
    movieId: "6",
    userId: "4",
    userName: "Alice Williams",
    userAvatar: "/placeholder.svg?height=40&width=40",
    rating: 7,
    comment: "Visually stunning but the plot gets too convoluted at times.",
    status: "rejected",
    createdAt: "2023-02-06T12:00:00Z",
  },
  {
    id: "7",
    movieId: "8",
    userId: "3",
    userName: "Bob Johnson",
    userAvatar: "/placeholder.svg?height=40&width=40",
    rating: 10,
    comment: "A perfect social commentary with unexpected twists. Deserved the Oscar for Best Picture.",
    status: "pending",
    createdAt: "2023-02-07T12:00:00Z",
  },
  {
    id: "8",
    movieId: "10",
    userId: "5",
    userName: "Charlie Brown",
    userAvatar: "/placeholder.svg?height=40&width=40",
    rating: 8,
    comment: "Joaquin Phoenix's performance is haunting. A disturbing but powerful character study.",
    status: "pending",
    createdAt: "2023-02-08T12:00:00Z",
  },
]

// Dummy Analytics Data
export const analyticsData: AnalyticsData = {
  viewsByMonth: [
    { month: "Jan", views: 4500 },
    { month: "Feb", views: 5200 },
    { month: "Mar", views: 4800 },
    { month: "Apr", views: 5800 },
    { month: "May", views: 6000 },
    { month: "Jun", views: 6500 },
    { month: "Jul", views: 7500 },
    { month: "Aug", views: 8000 },
    { month: "Sep", views: 8200 },
    { month: "Oct", views: 7800 },
    { month: "Nov", views: 8500 },
    { month: "Dec", views: 9000 },
  ],
  genreDistribution: [
    { genre: "Action", count: 28 },
    { genre: "Drama", count: 35 },
    { genre: "Comedy", count: 20 },
    { genre: "Sci-Fi", count: 15 },
    { genre: "Thriller", count: 18 },
    { genre: "Horror", count: 10 },
    { genre: "Romance", count: 12 },
  ],
  ratingDistribution: [
    { rating: "9-10", count: 15 },
    { rating: "8-9", count: 25 },
    { rating: "7-8", count: 30 },
    { rating: "6-7", count: 18 },
    { rating: "5-6", count: 10 },
    { rating: "Below 5", count: 5 },
  ],
  topMovies: [
    { title: "The Shawshank Redemption", views: 12500 },
    { title: "The Dark Knight", views: 11800 },
    { title: "Inception", views: 10500 },
    { title: "Pulp Fiction", views: 9800 },
    { title: "The Godfather", views: 9200 },
  ],
}

// Helper function to get all unique genres from movies
export function getAllGenres(): string[] {
  const genreSet = new Set<string>()
  movies.forEach((movie) => {
    movie.genre.forEach((genre) => {
      genreSet.add(genre)
    })
  })
  return Array.from(genreSet).sort()
}

// Helper function to get all unique years from movies
export function getAllYears(): number[] {
  const yearSet = new Set<number>()
  movies.forEach((movie) => {
    yearSet.add(movie.year)
  })
  return Array.from(yearSet).sort((a, b) => b - a)
}

// Helper function to get a movie by ID
export function getMovieById(id: string): Movie | undefined {
  return movies.find((movie) => movie.id === id)
}

// Helper function to get reviews for a specific movie
export function getReviewsForMovie(movieId: string): Review[] {
  return reviews.filter((review) => review.movieId === movieId && review.status === "approved")
}

