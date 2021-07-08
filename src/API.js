const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = 'c0341e4fa2480ab7786c426cfdc94215'
const selectedLanguage = 'en-US'

const trendingUrl = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`

//MOVIE ID COMES FROM USE-PARAMS
const movieDetailsUrl = `${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=${selectedLanguage}`

const API = ''

export default API

// URL POPULAR MOVIES
// https://api.themoviedb.org/3/movie/popular?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US&page=1

// URL TRENDING MOVIES
// https://api.themoviedb.org/3/trending/movie/week?api_key=c0341e4fa2480ab7786c426cfdc94215

// URL GENRES
//https://api.themoviedb.org/3/genre/movie/list?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US

// URL MOVIE DETAILS
// https://api.themoviedb.org/3/movie/550?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US

// https://image.tmdb.org/t/p/w342 + (quello che ti arriva nella risposta al fetch)
