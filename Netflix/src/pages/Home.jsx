import Banner from '../components/Banner';
import requests from '../Requests';
import Row from '../components/Row';
import RowVertical from '../components/RowVertical';
import Navbar from '../components/Navbar';

function Home() {
	return (
		<>
			<Navbar />
			<Banner />
			<RowVertical rowID='1' title='Latest' dataURL={requests.latest} />
			<Row rowID='2' title='Top rated' dataURL={requests.topRated} />
			<Row rowID='3' title='Upcoming' dataURL={requests.upcoming} />
			<Row rowID='4' title='Popular' dataURL={requests.popular} />
		</>
	);
}

export default Home;
