import { useEffect } from 'react'
import useStore from '../store'
import MovieListItem from '../components/MovieListItem'

function MoviesPage() {
	const popularMovies = useStore(store => store.popularMovies)
	const fetchPopularMovies = useStore(store => store.fetchPopularMovies)

	useEffect(() => {
		fetchPopularMovies()
		console.log('I am fetching now')
	}, [])

	const moviesVoteSorted = popularMovies.sort(function (a, b) {
		return b.vote_average - a.vote_average
	})

	return (
		<section className="section__style trending-now">
			<h2>Movies</h2>
			<ul className="list__section">
				{moviesVoteSorted.map(movie => (
					<MovieListItem movie={movie} />
				))}
			</ul>
		</section>
	)
}

export default MoviesPage
