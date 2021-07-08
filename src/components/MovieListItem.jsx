import { Link } from 'react-router-dom'
import useStore from '../store'

const placeholder =
	'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

function MovieListItem({ movie }) {
	const setModal = useStore(store => store.setModal)
	const setSelectedMovieModal = useStore(store => store.setSelectedMovieModal)
	const fetchSelectedItem = useStore(store => store.fetchSelectedItem)

	return (
		<li key={movie.id}>
			<Link>
				<article
					className="movie__item container"
					onClick={() => {
						setModal('movie')
						setSelectedMovieModal(movie)
					}}>
					<img
						className="image"
						src={
							movie.backdrop_path
								? `https://image.tmdb.org/t/p/w342${movie.backdrop_path}`
								: placeholder
						}
						alt={movie.title}
					/>
					<div className="middle">
						<div className="text">
							<h2 className="movie_title">{movie.title || movie.name}</h2>
							<h3>{`Vote: ${movie.vote_average}`}</h3>
							<h3>{`Released: ${
								movie.release_date || movie.first_air_date
							}`}</h3>
						</div>
					</div>
				</article>
			</Link>
		</li>
	)
}

export default MovieListItem
