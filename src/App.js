import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TrendingPage from './pages/TrendingPage'
import ModalConteiner from './modals/ModalConteiner'
import MoviesPage from './pages/MoviesPage'

import './styles/App.css'
import SeriesPage from './pages/SeriesPage'

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

				<Route path="/movies">
					<MoviesPage />
				</Route>

				<Route path="/series">
					<SeriesPage />
				</Route>

				<Route>{/* Category */}</Route>
			</Switch>

			<ModalConteiner />
		</div>
	)
}

export default App
