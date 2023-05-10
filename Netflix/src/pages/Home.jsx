import Banner from '../components/Banner';
import requests from '../Requests';
import Row from '../components/Row';
import RowVertical from '../components/RowVertical';
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

	return (
		<>
			<Navbar />
			<Banner randomMovie={randomMovie} movies={movies} />
			<RowVertical rowID='1' title='Latest' dataURL={requests.latest} />
			<Row rowID='2' title='Top rated' dataURL={requests.topRated} />
			<Row rowID='3' title='Upcoming' dataURL={requests.upcoming} />
			<Row rowID='4' title='Popular' dataURL={requests.popular} />
		</>
	);
}

export default Home;
