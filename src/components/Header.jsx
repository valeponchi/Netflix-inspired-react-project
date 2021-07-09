import { Link } from 'react-router-dom'

function Header() {
	function handleChange(e) {
		const inputName = e.target.name
		const inputValue = inputName.value
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
					{/* <span>
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								name="search"
								value={input.search}
								onChange={handleChange}
								placeholder="Search..."></input>
						</form>
					</span> */}
				</ul>
			</nav>
		</header>
	)
}

export default Header
