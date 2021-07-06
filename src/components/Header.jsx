import { Link } from 'react-router-dom'

function Header() {
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
						<Link to="/series">Series</Link>{' '}
					</li>
					<li key={2}>
						<Link to="/movies">Movies</Link>{' '}
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
