import requests from '../Requests';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function Home() {
	return (
		<>
			<Navbar />
			<Banner />
			<Row title='Top rated' API_URL={requests.topRated} />
			<Row title='Upcoming' API_URL={requests.upcoming} />
			<Row title='Popular' API_URL={requests.popular} />
		</>
	);
}

export default Home;
