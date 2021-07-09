import { Link, useHistory } from 'react-router-dom'
import useStore from '../store'

function Header() {
	const fetchSearch = useStore(store => store.fetchSearch)

	let history = useHistory()

	function handleSubmit(e) {
		e.preventDefault()

		let searchedString = e.target[0].value
		fetchSearch(searchedString)
		// <Redirect to="/searched" />

		history.push('/searched')

		e.target.reset()
	}

	return (
		<header className="top-bar">
			<nav className="header__nav">
				<ul>
					<li>
						<img
							className="logo"
							src={`/assets/icons/netflix_logo.svg`}
							alt="Netflix logo"
						/>
					</li>
					<li key={0}>
						<Link to="/">Home</Link>{' '}
					</li>
					<li key={1}>
						{' '}
						<Link to="/trending">Trending Now</Link>{' '}
					</li>
					<li key={2}>
						<Link to="/movies">Movies</Link>{' '}
					</li>
					<li key={3}>
						<Link to="/series">Series</Link>{' '}
					</li>
					<li>
						<form onSubmit={handleSubmit}>
							<input type="text" name="search" placeholder="Search..."></input>
						</form>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
