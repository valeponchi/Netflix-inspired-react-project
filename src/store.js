import create from 'zustand'
// const apiKey = 'c0341e4fa2480ab7786c426cfdc94215'

const useStore = create((set, get) => ({
	selectedModalMovie: null,
	setSelectedMovieModal: movie => set({ selectedModalMovie: movie }),

	modal: '',
	setModal: modal => set({ modal }),
	closeModal: () => set({ modal: '' }),

	popularMovies: [],
	fetchPopularMovies: () => {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US&page=1'
		)
			.then(resp => resp.json())
			.then(movies => {
				const listMovies = movies.results.map(item => ({
					...item,
					type: 'movie',
				}))
				set({ popularMovies: listMovies })
			})
	},

	popularTvSeries: [],
	fetchPopularTVSeries: () => {
		fetch(
			'https://api.themoviedb.org/3/trending/tv/week?api_key=c0341e4fa2480ab7786c426cfdc94215'
		)
			.then(resp => resp.json())
			.then(tv => {
				const listTV = tv.results.map(item => ({ ...item, type: 'tv' }))
				set({ popularTvSeries: listTV })
			})
	},

	trendingMoviesAndTV: () => {
		const movies = get().popularMovies
		const tvSeries = get().popularTvSeries
		if (movies.length && tvSeries.length) return [...movies, ...tvSeries]
	},

	selectedItem: [],
	fetchSelectedItem: item => {
		fetch(
			`https://api.themoviedb.org/3/${item.type}/${item.id}?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US`
		)
			.then(resp => resp.json())
			.then(itemDetails => {
				set({ selectedItem: itemDetails })
			})
	},

	// search: '',
	// setSearch: input => set({ search: input }),

	// searchedMovies: [],
	// fetchSearch: item => {
	// 	fetch(
	// 		`https://api.themoviedb.org/3/search/multi?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US&query=${search}&page=1&include_adult=false`
	// 	)
	// 		.then(resp => resp.json())
	// 		.then(searchedItems => {
	// 			set({ searchedMovies: searchedItems })
	// 		})
	// },
}))

export default useStore

// SINGLE MOVIE
// https://api.themoviedb.org/3/${item.type}/${item.id}?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US
//
// https://api.themoviedb.org/3/${item.type}/${item.id}?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US

// https://api.themoviedb.org/3/trending/tv/week?api_key=c0341e4fa2480ab7786c426cfdc94215

// URL POPULAR MOVIES
// https://api.themoviedb.org/3/movie/popular?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US&page=1

// URL TRENDING MOVIES
// https://api.themoviedb.org/3/trending/movie/week?api_key=c0341e4fa2480ab7786c426cfdc94215

// URL GENRES
//https://api.themoviedb.org/3/genre/movie/list?api_key=c0341e4fa2480ab7786c426cfdc94215&language=en-US

//https://api.themoviedb.org/3/discover/movie/api_key=c0341e4fa2480ab7786c426cfdc94215&with_genres=35
//
