import Banner from '../components/Banner';
import requests from '../Requests';
import Row from '../components/Row';
import Navbar from '../components/Navbar';

function Home() {
	return (
		<>
			<Navbar />
			<Banner />
			<Row title='Top rated' dataURL={requests.topRated} />
			<Row title='Upcoming' dataURL={requests.upcoming} />
			<Row title='Popular' dataURL={requests.popular} />
		</>
	);
}

export default Home;
