import Banner from '../components/Banner';
import requests from '../Requests';
import Row from '../components/Row';
import Navbar from '../components/Navbar';
import { MoviesProvider, useMovies } from '../context/MoviesContext';

function Home() {
	return (
		<MoviesProvider>
			<Navbar />
			<Banner />
			<Row title='Top rated' dataURL={requests.topRated} />
			<Row title='Upcoming' dataURL={requests.upcoming} />
			<Row title='Popular' dataURL={requests.popular} />
		</MoviesProvider>
	);
}

export default Home;
