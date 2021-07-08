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
// import Slider from 'react-slick'

function TrendingNow() {
	const [swiperRef, setSwiperRef] = useState(null)
	const fetchPopularMovies = useStore(store => store.fetchPopularMovies)
	useEffect(() => {
		fetchPopularMovies()
		console.log('I am fetching now')
	}, [])

	const popularMovies = useStore(store => store.popularMovies)
	console.log('popularMovies: ', popularMovies)

	return (
		<section className="section__style trending-now">
			<Link to="/trending">
				<h2>Trending Now</h2>
			</Link>
			<Swiper
				onSwiper={setSwiperRef}
				slidesPerView={3}
				centeredSlides={true}
				spaceBetween={30}
				pagination={{
					type: 'fraction',
				}}
				navigation={true}
				className="mySwiper">
				<ul className="list__section">
					{/* <Slider /> */}
					{popularMovies.map(movie => (
						<SwiperSlide>
							<MovieListItem movie={movie} key={movie.id} />
						</SwiperSlide>
					))}
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
