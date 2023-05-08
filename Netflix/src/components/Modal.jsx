import axios from 'axios';
import { useEffect, useState } from 'react';
import requests, { getVideoUrl } from '../Requests';
import ReactPlayer from 'react-player/youtube';
import { FaPlay } from 'react-icons/fa';
import { BiPlus } from 'react-icons/bi';
import { BsPauseCircle } from 'react-icons/bs';
import { BsHandThumbsUp } from 'react-icons/bs';

function Modal({ handleClose, id }) {
	const [trailer, setTrailer] = useState(null);
	const [genres, setGenres] = useState(null);
	const [movie, setMovie] = useState(null);
	const [playTrailer, setPlayTrailer] = useState(false);

	const getTrailer = (videos) => {
		const trailer = videos.find((video) => video.type === 'Trailer');
		return trailer;
	};

	useEffect(() => {
		if (id) {
			const url = getVideoUrl(id);
			axios.get(url).then((response) => {
				setTrailer(getTrailer(response.data.videos.results));
				setGenres(response.data.genres);
				setMovie(response.data);
			});
		}
	}, [id]);

	const handlePlay = () => {
		setPlayTrailer(!playTrailer);
	};

	return (
		<>
			<div
				onClick={handleClose}
				className='fixed flex items-center justify-center top-0 left-0 bg-black/80 h-full w-full z-[50]'
			></div>
			<div className='w-full z-[100] fixed top-0 lg:top-10 left-0 right-0 mx-auto max-w-5xl overflow-hidden rounded-md scrollbar-hide'>
				<button
					onClick={handleClose}
					className='modalBtn absolute right-5 top-5 bg-gray-400 text-white rounded-full p-2 w-10 h-10  flex
						items-center justify-center cursor-pointer hover:bg-gray-800 z-[100]'
				>
					X
				</button>
				<div className='relative pt-[56.25%]'>
					<ReactPlayer
						width='100%'
						height='100%'
						style={{ position: 'absolute', top: '0', left: '0' }}
						muted={false}
						controls
						volume={0.5}
						playing={playTrailer}
						url={`https://www.youtube.com/watch?v=${trailer?.key}`}
					/>
				</div>
				<div className='bg-zinc-900 z-50 p-4 flex justify-between'>
					<div className='flex items-center justify-between w-full'>
						<div className='flex items-center'>
							<h2 className='text-white font-bold text-lg md:text-2xl'>
								{movie?.original_title}
							</h2>
							<p className='text-white flex justify-center items-center  h-5 w-10 text-xs border-[1px] ml-2 rounded-md'>
								HD
							</p>
						</div>
						<div className='flex items-center space-x-2'>
							<button onClick={handlePlay} className='modalBtn'>
								{playTrailer ? (
									<BsPauseCircle size={30} className='btnModal text-white' />
								) : (
									<FaPlay size={30} className='btnModal text-white' />
								)}
							</button>
							<button className='modalBtn'>
								<BiPlus size={30} className='btnModal text-white' />
							</button>
							<button className='modalBtn'>
								<BsHandThumbsUp size={30} className='btnModal text-white' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Modal;
