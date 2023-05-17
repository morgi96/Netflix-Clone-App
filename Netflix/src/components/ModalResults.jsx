import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { API_KEY } from '../Requests';
import { debounce } from 'lodash';

function ModalResults({ handleModal }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const listRef = useRef(null);

	const scrollToMovie = (currentIndex) => {
		if (listRef.current && listRef.current.children[currentIndex]) {
			listRef.current.children[currentIndex].scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
			});
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
		} else if (e.key === 'ArrowUp') {
			setCurrentIndex((currentIndex) =>
				currentIndex > 0 ? currentIndex - 1 : currentIndex
			);
			scrollToMovie(currentIndex - 1);
		} else if (e.key === 'ArrowDown') {
			setCurrentIndex((currentIndex) =>
				currentIndex < searchResults.length - 1
					? currentIndex + 1
					: currentIndex
			);
			scrollToMovie(currentIndex + 1);
		}
	};
	useEffect(() => {
		scrollToMovie();
	}, [currentIndex]);

	const delayCallApi = useCallback(
		debounce((searchTerm) => {
			handleSearch(searchTerm);
		}, 1000),
		[]
	);

	useEffect(() => {
		delayCallApi(searchTerm);
		return delayCallApi.cancel;
	}, [searchTerm, delayCallApi]);

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSearch = async (searchTerm) => {
		try {
			if (searchTerm === '') {
				setSearchResults([]);
				return;
			}
			setCurrentIndex(0);
			const response = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
			);
			const data = await response.json();
			const filteredResults = data.results.filter(
				(movie) =>
					movie.original_title
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) &&
					movie.backdrop_path !== null &&
					movie.original_language === 'en' &&
					movie.vote_count > 200
			);
			setSearchResults(filteredResults);
		} catch (error) {
			console.error('Error data fetching, try again later...', error);
		}
	};
	console.log(currentIndex);

	return (
		<div>
			<div className='absolute flex items-center justify-center top-0 left-0 bg-black/80 h-full w-full z-[50]'></div>
			<div
				className='w-[100%] md:w-[60%] lg:w-[40%] max-h-[600px]
z-[100] absolute top-0 md:top-20 2xl:top-50 left-0 right-0 mx-auto max-w-5xl overflow-y-scroll scroll-smooth scrollbar-hide rounded-md text-white bg-zinc-900 p-4'
			>
				<div className='w-full flex m-auto'>
					<form className='w-full h-[40px] flex space-x-4'>
						<label className='text-white m-auto px-2'>
							<BsSearch size={20} />
						</label>
						<input
							className='w-full h-full flex-1 bg-transparent outline-none p-2  rounded-md text-white font-bold text-lg cursor-pointer'
							placeholder='Search...'
							type='search'
							autoComplete='off'
							spellCheck='false'
							minLength='3'
							maxLength='48'
							value={searchTerm}
							onChange={handleChange}
							onKeyDown={handleKeyDown}
						></input>
						<button
							onClick={handleModal}
							className='block text-sm border-[1px] border-white px-2 h-6 rounded-lg m-auto'
						>
							esc
						</button>
					</form>
				</div>
				<div
					className='h-[1px] max-w-[100%] bg-zinc-800 mx-auto
				'
				></div>
				<div className='w-full'>
					{/* <div className='p-2'> */}
					<ul className='mt-2' ref={listRef}>
						{searchResults.map((movie, i) => (
							<div
								key={movie.release_date}
								className={`h-[25%] hover:bg-zinc-700 duration-[200ms] ease-in rounded-md flex p-2 mb-2 ${
									i === currentIndex ? 'bg-zinc-700' : 'bg-zinc-800'
								}`}
							>
								<img
									src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
									className='h-28 rounded'
									alt={movie?.title}
								/>
								<li key={movie?.id} className='ml-3'>
									<p className='font-bold'>{movie?.original_title}</p>
									{/* <p classaName='text-xs'>{movie?.overview}</p> */}
								</li>
							</div>
						))}
					</ul>
					{/* </div> */}
				</div>
			</div>
		</div>
	);
}

export default ModalResults;
