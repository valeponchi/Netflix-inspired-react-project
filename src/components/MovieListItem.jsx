import { Link } from 'react-router-dom'

const placeholder =
	'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

function MovieListItem({ movie }) {
	return (
		<li key={movie.id}>
			<Link to="/movie/:movieId">
				<article className="movie__item container">
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
							<h4>{`Title: ${movie.title}`}</h4>
							<h4>{`Vote: ${movie.vote_average}`}</h4>
							<h4>{`Release Date: ${movie.release_date}`}</h4>
						</div>
					</div>
				</article>
			</Link>
		</li>
	)
}

export default MovieListItem
