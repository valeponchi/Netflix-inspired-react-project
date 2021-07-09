import { useEffect } from 'react'
import useStore from '../store'
import MovieListItem from '../components/MovieListItem'

function TrendingNow() {
	const trendingMoviesAndTV = useStore(store => store.trendingMoviesAndTV)
	const fetchPopularMovies = useStore(store => store.fetchPopularMovies)

	useEffect(() => {
		fetchPopularMovies()
		console.log('I am fetching now')
	}, [])

	const all = trendingMoviesAndTV()
	const allVoteSorted = all.sort(function (a, b) {
		return b.vote_average - a.vote_average
	})

	return (
		<section className="section__style trending-now">
			<h2>Trending Now</h2>
			<ul className="list__section">
				{allVoteSorted.map(movie => (
					<MovieListItem movie={movie} />
				))}
			</ul>
		</section>
	)
}

export default TrendingNow

{
	/* <li>
					<article className="movie__item">
						<img
							src="https://dove.org/wp-content/uploads/lucacover.png"
							alt="Luca movie"
						/>
					</article>
				</li> */
}
