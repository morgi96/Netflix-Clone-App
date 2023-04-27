import Baner from '../components/Baner';
import requests from '../Requests';
requests;
import Row from '../components/Row';
import RowVertical from '../components/RowVertical';
import Navbar from '../components/Navbar';

function Home() {
	return (
		<>
			<Navbar />
			<Baner />
			<RowVertical title='Latest' dataURL={requests.latest} />
			<Row rowID='1' title='Upcoming' dataURL={requests.upcoming} />
			<Row rowID='2' title='Popular' dataURL={requests.popular} />
			<Row rowID='3' title='Top rated' dataURL={requests.topRated} />
		</>
	);
}

export default Home;
