import { useEffect } from 'react'
import useStore from '../store'
import { Link } from 'react-router-dom'
import MovieListItem from '../components/MovieListItem'

function TrendingNow() {
	const fetchPopularMovies = useStore(store => store.fetchPopularMovies)
	useEffect(() => {
		fetchPopularMovies()
		console.log('I am fetching now')
	}, [])

	const popularMovies = useStore(store => store.popularMovies)
	console.log('popularMovies: ', popularMovies)

	return (
		<section className="section__style trending-now">
			<h2>Trending Now</h2>
			<ul className="list__section">
				{popularMovies.map(movie => (
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
