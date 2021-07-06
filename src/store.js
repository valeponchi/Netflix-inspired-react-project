import create from 'zustand'

const useStore = create((set, get) => ({
	popularMovies: {},
	fetchPopularMovies: () => {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US&page=1'
		)
			.then(resp => resp.json())
			.then(movies => set({ popularMovies: movies }))
	},
}))

export default useStore

// URL POPULAR MOVIES
// https://api.themoviedb.org/3/movie/popular?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US&page=1

// URL TRENDING MOVIES
// https://api.themoviedb.org/3/trending/movie/week?api_key=c0341e4fa2480ab7786c426cfdc94215

// URL GENRES
//https://api.themoviedb.org/3/genre/movie/list?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US
