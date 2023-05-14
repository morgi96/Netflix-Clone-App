import Banner from '../components/Banner';
import requests from '../Requests';
import Row from '../components/Row';
// import RowVertical from '../components/RowVertical';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Home() {
	const [randomMovie, setRandomMovie] = useState(null);
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(requests.popular).then(({ data: { results } }) => {
			const randomMovie = results[Math.floor(Math.random() * results.length)];
			setRandomMovie(randomMovie);
			setMovies(results);
		});
	}, []);
	console.log(movies);

	return (
		<>
			<Navbar />
			<Banner randomMovie={randomMovie} movies={movies} />
			<Row title='Top rated' API_URL={requests.topRated} />
			<Row title='Upcoming' API_URL={requests.upcoming} />
			{/* <Row title='Popular' API_URL={requests.popular} /> */}
			{/* <RowVertical title='Latest' dataURL={requests.latest} /> */}
		</>
	);
}

export default Home;
