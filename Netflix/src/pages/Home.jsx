import requests from '../Requests';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function Home() {
	return (
		<>
			<Banner />
			<Row title='Latest' API_URL={requests.latest} />
			<Row title='Top rated' API_URL={requests.topRated} />
			<Row title='Upcoming' API_URL={requests.upcoming} />
		</>
	);
}

export default Home;
