import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import useStore from '../store'
import MovieListItem from './MovieListItem'

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper.min.css'
// import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
// install Swiper modules
SwiperCore.use([Navigation])

function TrendingNow() {
	const searchedMovies = useStore(store => store.searchedMovies)
	const [swiperRef, setSwiperRef] = useState('')

	const fetchPopularMovies = useStore(store => store.fetchPopularMovies)
	const popularMovies = useStore(store => store.popularMovies)
	const popularMoviesVoteSorted = popularMovies.sort(function (a, b) {
		return b.vote_average - a.vote_average
	})
	const fetchPopularTVSeries = useStore(store => store.fetchPopularTVSeries)
	const popularTvSeries = useStore(store => store.popularTvSeries)
	const trendingMoviesAndTV = useStore(store => store.trendingMoviesAndTV)

	// FETCH POPULAR MOVIES
	useEffect(() => {
		fetchPopularMovies()
		console.log('I am fetching movies now')
	}, [fetchPopularMovies])

	//FETCH TRENDING TV SERIES
	useEffect(() => {
		fetchPopularTVSeries()
		console.log('I am fetching TV series now')
	}, [fetchPopularTVSeries])

	console.log('popularMoviesVoteSorted: ', popularMoviesVoteSorted)
	console.log('popularTvSeries: ', popularTvSeries)

	console.log('trendingMoviesAndTV: ', trendingMoviesAndTV())
	const all = trendingMoviesAndTV()
	console.log(`all:`, all)

	return (
		<section className="section__style trending-now">
			{/* <div className={searchedMovies !== [] ? 'visible' : 'invisible'}>
				<h2>Your search</h2>
				<p>This is what was found...</p>
			</div> */}
			<Link to="/movies">
				<h2>Movies</h2>
			</Link>
			<Swiper
				onSwiper={setSwiperRef}
				slidesPerView={2}
				breakpoints={{ 768: { width: 768, slidersPerView: 4 } }}
				loop={true}
				spaceBetween={20}
				pagination={{
					type: 'fraction',
				}}
				navigation={true}
				className="mySwiper">
				<ul className="list__section">
					{popularMoviesVoteSorted.map(movie => {
						// console.log(movie)
						return (
							<SwiperSlide key={movie.id}>
								<MovieListItem movie={movie} key={movie.id} />
							</SwiperSlide>
						)
					})}
				</ul>
			</Swiper>
		</section>
	)
}

export default TrendingNow

{
	/* <li>
					<article className="movie__item">
						<img
							src="https://dove.org/wp-content/uploads/lucacover.png"
							alt="Luca movie"
						/>
					</article>
				</li> */
}
