import Baner from '../components/Baner';
import requests from '../Requests';
requests;
import Row from '../components/Row';
import Navbar from '../components/Navbar';

function Home() {
	return (
		<>
			<Navbar />
			<Baner />
			<Row rowID='1' title='Upcoming' fetchURL={requests.upcoming} />
			<Row rowID='2' title='Popular' fetchURL={requests.popular} />
			<Row rowID='3' title='Top rated' fetchURL={requests.topRated} />
		</>
	);
}

export default Home;
