import styled from 'styled-components'

import useStore from '../store'
import MovieModal from './MovieModal'

const modals = {
	'': null,
	movie: MovieModal,
}

function ModalContainer({ className }) {
	const modal = useStore(store => store.modal)
	const closeModal = useStore(store => store.closeModal)

	const Modal = modals[modal]

	if (!modal) return null

	return (
		<div className={`modal-container ${className}`}>
			<div className="modal">
				<button className="close-modal" onClick={closeModal}>
					&times;
				</button>
				<Modal />
			</div>
		</div>
	)
}

export default styled(ModalContainer)`
	position: absolute;
	top: 0;
	left: 0;

	height: 100vh;
	width: 100vw;

	display: grid;
	place-content: center;

	background-color: rgba(0, 0, 0, 0.4);
	color: black;

	z-index: 100;

	.modal {
		width: 60%;
		margin-left: auto;
		margin-right: auto;
		font-weight: 600;
		border-radius: 5px;
		padding: 20px 40px;
		background-color: aliceblue;
		position: relative;

		display: grid;
		grid-gap: 5px;
	}

	.close-modal {
		position: absolute;

		top: -10px;
		right: -10px;

		justify-self: end;
		border-radius: 50%;
		border: solid 1px var(--background-stripe);
		background-color: var(--background-stripe);

		width: 40px;
		height: 40px;

		font-size: 1.5rem;
		color: var(--white);

		display: grid;
		place-content: center;
		padding-bottom: 4px;
	}
`
