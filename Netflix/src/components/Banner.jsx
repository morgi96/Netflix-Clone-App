import { useState, useEffect } from 'react';
import requests from '../Requests';
import Modal from './Modal';
import axios from 'axios';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function Banner() {
	const [showModal, setShowModal] = useState(false);
	const [randomMovie, setRandomMovie] = useState(null);

	useEffect(() => {
		axios.get(requests.popular).then(({ data: { results } }) => {
			const randomMovie = results[Math.floor(Math.random() * results.length)];
			setRandomMovie(randomMovie);
		});
	}, []);

	const handleOpen = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const truncate = (str, n) => {
		if (str?.length > n) {
			return str.slice(0, n) + '...';
		} else {
			return str;
		}
	};
	return (
		<>
			<div className='w-full h-[600px] text-white'>
				<div className='w-full h-full'>
					<div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
					<img
						src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
						alt={randomMovie?.title}
						className='object-cover object-center w-full h-[600px]'
					/>
					<div className='absolute w-full top-[25%] p-4 md:p-8'>
						<h1 className='mb-4 font-bold text-3xl md:text-5xl'>
							{randomMovie?.title}
						</h1>
						<div className='my-5 flex space-x-4'>
							<div>
								<button className='flex items-center rounded bg-white text-black font-bold text-lg py-[4px] px-4'>
									<FaPlay size={16} className='mr-2' />
									Play
								</button>
							</div>
							<div>
								<button
									onClick={handleOpen}
									className='flex items-center rounded bg-gray-500/60 py-[4px] px-4 text-lg'
								>
									<AiOutlineInfoCircle size={20} className='mr-2' />
									More informations
								</button>
							</div>
						</div>

						<p className='max-w-[60%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] 2xl:text-lg'>
							{truncate(randomMovie?.overview, 150)}
						</p>
						<p className='text-gray-500 pt-2 text-sm md:text-base w-full md:max-w-[60%] lg:max-w-[45%] xl:max-w-[30%]'>
							Released: {randomMovie?.release_date}
						</p>
					</div>
				</div>
			</div>
			{showModal && <Modal handleClose={handleClose} id={randomMovie?.id} />}
		</>
	);
}

export default Banner;
