import axios from 'axios';
import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import { getVideoUrl, getCastUrl } from '../Requests';
import { FaPlay } from 'react-icons/fa';
import { BiPlus } from 'react-icons/bi';
import { BsPauseCircle, BsHandThumbsUp } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

function Modal({ handleClose, id }) {
	const [playTrailer, setPlayTrailer] = useState(false);
	const [trailer, setTrailer] = useState(null);
	const [genres, setGenres] = useState(null);
	const [movie, setMovie] = useState(null);
	const [cast, setCast] = useState(null);
	const [favourite, setFavourite] = useState(false);
	const [savedMovies, setSavedMovies] = useState(false);
	const { user } = UserAuth();

	const movieID = doc(db, 'users', `${user?.email}`);

	const saveMovie = async () => {
		if (user?.email) {
			setFavourite(!favourite);
			setSavedMovies(true);
			await updateDoc(movieID, {
				savedMovies: arrayUnion({
					id: movie?.id,
					title: movie?.title,
					img: movie?.poster_path,
				}),
			});
		} else {
			alert('Please log in to save a movie!');
		}
	};

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
				className='w-full mx-auto
z-[100] fixed top-0 md:top-10 left-0 right-0 bottom-0 max-w-4xl md:max-w-2xl lg:max-w-3xl overflow-hidden rounded-md scrollbar-hide'
			>
				<button
					onClick={handleClose}
					className='modalBtn absolute right-5 top-5 bg-zinc-900 text-white rounded-md p-2 w-8 h-8 md:w-9 md:h-9  flex
						items-center justify-center cursor-pointer border-[1px] border-white hover:bg-white hover:text-black z-[100] duration-[250ms] transition ease'
				>
					<AiOutlineClose />
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
							<h2 className='text-white font-bold text-lg md:text-2xl lg:text-3xl'>
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
									<BiPlus className='btnModal text-white rounded-full' />
								</button>
								<button className='modalBtn' onClick={saveMovie}>
									<BsHandThumbsUp
										className={`btnModal rounded-full ${
											favourite ? 'bg-white text-black' : ' text-white'
										}`}
									/>
								</button>
							</div>
						</div>
						<div className='flex items-center space-x-2 mb-2'>
							<p className='font-semibold text-sm text-green-500'>
								Match: {Math.round(movie?.vote_average * 10)}%
							</p>
							<p className='text-gray-600 text-sm '>{movie?.release_date}</p>
							<p className='text-white m-auto items-center flex justify-center h-4 w-9 text-xs border-[1px] font-semibold rounded-md'>
								HD
							</p>
						</div>
					</div>
					<div className='flex flex-col justify-start items-center max-w-[75%] md:max-w-[65%]'>
						<p className='text-white text-semibold text-sm 2xl:text-base'>
							{movie?.overview}
						</p>
					</div>
					<div className='mt-4 space-y-1'>
						<div className='text-gray-600 text-xs md:text-sm'>
							<span className='text-white mr-2'>Starring:</span>
							{cast
								?.map((cast) => cast?.name)
								.slice(0, 2)
								.join(', ')}
						</div>
						<div className='text-gray-600  text-xs md:text-sm'>
							<span className='text-white mr-2'>Genres:</span>
							{genres?.map((genre) => genre?.name).join(' • ')}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Modal;
