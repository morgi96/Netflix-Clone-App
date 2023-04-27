import Baner from '../components/Baner';
import requests from '../Requests';
import Row from '../components/Row';
import RowVertical from '../components/RowVertical';
import Navbar from '../components/Navbar';

function Home() {
	return (
		<>
			<Navbar />
			<Baner />
			<RowVertical rowID='1' title='Latest' dataURL={requests.latest} />
			<Row rowID='4' title='Top rated' dataURL={requests.topRated} />
			<Row rowID='2' title='Upcoming' dataURL={requests.upcoming} />
			<Row rowID='3' title='Popular' dataURL={requests.popular} />
		</>
	);
}

export default Home;
