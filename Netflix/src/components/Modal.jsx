import axios from 'axios';
import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import { getVideoUrl, getCastUrl } from '../Requests';
import { FaPlay } from 'react-icons/fa';
import { BiPlus } from 'react-icons/bi';
import { BsPauseCircle, BsHandThumbsUp } from 'react-icons/bs';

function Modal({ handleClose, id }) {
	const [trailer, setTrailer] = useState(null);
	const [genres, setGenres] = useState(null);
	const [movie, setMovie] = useState(null);
	const [playTrailer, setPlayTrailer] = useState(false);
	const [cast, setCast] = useState(null);

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

	useEffect(() => {
		if (id) {
			const url = getCastUrl(id);
			axios.get(url).then((response) => {
				setCast(response.data.cast);
			});
		}
	}, [id]);

	console.log(cast);

	const handlePlay = () => {
		setPlayTrailer(!playTrailer);
	};

	return (
		<>
			<div
				onClick={handleClose}
				className='fixed flex items-center justify-center top-0 left-0 bg-black/80 h-full w-full z-[50]'
			></div>
			<div
				className='w-full
z-[100] fixed top-0 md:top-5 2xl:top-10 left-0 right-0 mx-auto max-w-5xl overflow-hidden rounded-md scrollbar-hide'
			>
				<button
					onClick={handleClose}
					className='modalBtn absolute right-5 top-5 bg-gray-400 text-white rounded-full p-2 w-10 h-10  flex
						items-center justify-center cursor-pointer hover:bg-gray-800 z-[100]'
				>
					X
				</button>
				<div className='relative pt-[50%]'>
					<ReactPlayer
						width='100%'
						height='100%'
						style={{ position: 'absolute', top: '0', left: '0' }}
						muted={false}
						controls={false}
						volume={0.5}
						playing={playTrailer}
						url={`https://www.youtube.com/watch?v=${trailer?.key}`}
					/>
				</div>
				<div className='bg-zinc-900 z-50 p-4'>
					<div className='flex flex-col'>
						<div className='flex w-full justify-between'>
							<h2 className='text-white font-bold text-lg md:text-3xl'>
								{movie?.original_title}
							</h2>
							<div className='flex items-center space-x-2'>
								<button onClick={handlePlay} className='modalBtn'>
									{playTrailer ? (
										<BsPauseCircle size={30} className='btnModal text-white' />
									) : (
										<FaPlay size={30} className='btnModal text-white' />
									)}
								</button>
								<button className='modalBtn'>
									<BiPlus
										size={30}
										className='btnModal text-white rounded-full'
									/>
								</button>
								<button className='modalBtn'>
									<BsHandThumbsUp
										size={30}
										className='btnModal text-white rounded-full'
									/>
								</button>
							</div>
						</div>
						<div className='flex items-center space-x-2 pb-2'>
							<p className='font-semibold text-sm text-green-500'>
								{Math.round(movie?.vote_average * 10)}% Match
							</p>
							<p className='text-gray-600 text-sm '>{movie?.release_date}</p>
							<p className='text-white flex justify-center items-center  h-5 w-9 text-xs border-[1px] font-bold ml-3 rounded-md'>
								HD
							</p>
						</div>
					</div>
					<div className='flex flex-col justify-start items-center max-w-[75%] md:max-w-[65%]'>
						<p className='text-white text-semibold text-sm md:text-base'>
							{movie?.overview}
						</p>
					</div>
					<div className='mt-4 space-y-1'>
						<div className='text-white font-semibold text-xs md:text-sm'>
							<span className='text-gray-700 mr-2'>Genres:</span>
							{genres?.map((genre) => genre?.name).join(', ')}
						</div>
						<div className='text-white font-semibold text-xs md:text-sm'>
							<span className='text-gray-700 mr-2'>Starring:</span>
							{cast
								?.map((cast) => cast?.name)
								.slice(0, 2)
								.join(', ')}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Modal;
