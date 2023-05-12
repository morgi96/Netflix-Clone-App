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
	console.log(movies);

	return (
		<main>
			<Navbar />
			<Banner randomMovie={randomMovie} movies={movies} />
			{/* <RowVertical title='Latest' dataURL={requests.latest} /> */}
			{/* <main className='w-full overflow-hidden'> */}
			<Row title='Top rated' dataURL={requests.topRated} />
			<Row title='Upcoming' dataURL={requests.upcoming} />
			<Row title='Popular' dataURL={requests.popular} />
			{/* </main> */}
		</main>
	);
}

export default Home;
