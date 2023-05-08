// import MuiModal from '@mui/material/Modal';
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { modalState } from '../atoms/modalAtom';

// function Modal() {
// 	const handleClose = () => {
// 		setShowModal(false);
// 	};

// 	const [showModal, setShowModal] = useRecoilState(modalState);
// 	return (
// 		<MuiModal open={showModal} onClose={handleClose}>
// 			<>Modal</>
// 		</MuiModal>
// 	);
// }

// export default Modal;

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import requests from '../Requests';

function Modal({ handleClose }) {
	return (
		<div className='fixed flex items-center justify-center top-0 left-0 bg-black/80 h-full w-full'>
			<div className='flex justify-between bg-emerald-900  w-[400px] h-[600px] md:w-[750px] md:h-[450px] rounded p-4'>
				<h2 className='text-white font-bold text-lg'>Movie Title</h2>
				<p
					onClick={handleClose}
					className='bg-gray-400 text-white rounded-full p-2 w-8 flex items-center justify-center h-8 cursor-pointer hover:bg-gray-800'
				>
					X
				</p>
			</div>
		</div>
	);
}

export default Modal;
