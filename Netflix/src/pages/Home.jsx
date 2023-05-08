import Banner from '../components/Banner';
import requests from '../Requests';
import Row from '../components/Row';
import RowVertical from '../components/RowVertical';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import { useState } from 'react';
// import { useRecoilValue } from 'recoil';
// import { modalState } from '../atoms/modalAtom';

function Home() {
	const [showModal, setShowModal] = useState(false);

	const handleOpen = () => {
		setShowModal(true);
	};
	const handleClose = () => {
		setShowModal(false);
	};
	return (
		<>
			<Navbar />
			<Banner handleOpen={handleOpen} />
			<RowVertical rowID='1' title='Latest' dataURL={requests.latest} />
			<Row rowID='2' title='Top rated' dataURL={requests.topRated} />
			<Row rowID='3' title='Upcoming' dataURL={requests.upcoming} />
			<Row rowID='4' title='Popular' dataURL={requests.popular} />
			{/* <Modal dataURL={requests.videos} /> */}
			{showModal && <Modal handleClose={handleClose} />}
		</>
	);
}

export default Home;
