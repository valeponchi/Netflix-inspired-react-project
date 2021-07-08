import useStore from '../store'

function MovieModal() {
	const selectedModalMovie = useStore(store => store.selectedModalMovie)
	console.log(`selectedModalMovie:`, selectedModalMovie)
	const title =
		selectedModalMovie.title === undefined
			? selectedModalMovie.name
			: selectedModalMovie.title

	return (
		<div>
			<p>{`Title: ${title}`}</p>
			<br />
			<p className="modal__description">{`Description: ${selectedModalMovie.overview}`}</p>
		</div>
	)
}

export default MovieModal
