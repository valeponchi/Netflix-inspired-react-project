import { useEffect } from 'react'
import useStore from '../store'
import MovieListItem from '../components/MovieListItem'

function SeriesPage() {
	const popularTvSeries = useStore(store => store.popularTvSeries)
	const fetchPopularTVSeries = useStore(store => store.fetchPopularTVSeries)

	useEffect(() => {
		fetchPopularTVSeries()
		console.log('I am fetching TV series now (page)')
	}, [])

	const seriesVoteSorted = popularTvSeries.sort(function (a, b) {
		return b.vote_average - a.vote_average
	})

	return (
		<section className="section__style trending-now">
			<h2>TV Series</h2>
			<ul className="list__section">
				{seriesVoteSorted.map(movie => (
					<MovieListItem movie={movie} />
				))}
			</ul>
		</section>
	)
}

export default SeriesPage
