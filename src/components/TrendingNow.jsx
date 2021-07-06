import { useEffect } from 'react'
import useStore from '../store'

function TrendingNow() {
	const fetchPopularMovies = useStore(store => store.fetchPopularMovies)
	const popularMovies = useStore(store => store.popularMovies)

	const onlyMoviesResults = popularMovies.results
	console.log('onlyMoviesResults: ', onlyMoviesResults)

	const filteredMovies = onlyMoviesResults.filter(
		movie => movie.backdrop_path !== null
	)
	console.log('filteredMovies: ', filteredMovies)

	useEffect(() => {
		fetchPopularMovies()
	}, [])

	return (
		<section className="section__style trending-now">
			<h2>Trending Now</h2>
			<ul className="list__section">
				<li>
					<article className="movie__item">
						<img
							src="https://dove.org/wp-content/uploads/lucacover.png"
							alt="Luca movie"
						/>
					</article>
				</li>
				<li>
					<article className="movie__item">
						<img
							src="https://dove.org/wp-content/uploads/lucacover.png"
							alt="Luca movie"
						/>
					</article>
				</li>
				<li>
					<article className="movie__item">
						<img
							src="https://dove.org/wp-content/uploads/lucacover.png"
							alt="Luca movie"
						/>
					</article>
				</li>
			</ul>
		</section>
	)
}

export default TrendingNow
