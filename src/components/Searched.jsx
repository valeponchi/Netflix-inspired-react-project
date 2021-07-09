import useStore from '../store'
import MovieListItem from '../components/MovieListItem'

function Searched() {
	const searchedMovies = useStore(store => store.searchedMovies)
	console.log(`searchedMovies: `, searchedMovies)

	const searchedVoteSorted = searchedMovies.sort(function (a, b) {
		return b.vote_average - a.vote_average
	})

	return (
		<section className="section__style trending-now">
			<h2>Based on your search:</h2>
			<ul className="list__section">
				{searchedVoteSorted.map(movie => (
					<MovieListItem movie={movie} />
				))}
			</ul>
		</section>
	)
}

export default Searched
