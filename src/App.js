import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'
import './styles/App.css'
import HomePage from './pages/HomePage'
import TrendingPage from './pages/TrendingPage'

function App() {
	return (
		<div className="App">
			<Header />

			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/trending" exact>
					<TrendingPage />
				</Route>

				<Route path="/movie/:moviesId">{/* MODAL OF A MOVIE */}</Route>

				<Route>{/* Category */}</Route>
			</Switch>
		</div>
	)
}

export default App
