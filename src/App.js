import Header from './components/Header'
import { Redirect, Route, Switch } from 'react-router-dom'
import './styles/App.css'
import HomePage from './pages/HomePage'

function App() {
	return (
		<div className="App">
			<Header />
			<HomePage />

			<Switch>
				<Route path="/">
					<Redirect path="/movies" />
				</Route>

				<Route path="/movies">{/* HomePage  */}</Route>

				<Route path="/series">{/* Series */}</Route>

				<Route>{/* Category */}</Route>
			</Switch>
		</div>
	)
}

export default App
