import React, { useState, useEffect, useCallback } from 'react';
import { BsSearch } from 'react-icons/bs';
import { API_KEY } from '../Requests';
import { debounce } from 'lodash';

function ModalResults({ handleOpenModal }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

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

	console.log(searchTerm, searchResults);

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSearch = async (searchTerm) => {
		try {
			if (searchTerm === '') {
				setSearchResults([]);
				return;
			}
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

	return (
		<div>
			<div className='fixed flex items-center justify-center top-0 left-0 bg-black/80 h-full w-full z-[50] blur-lg'></div>
			<div
				className='w-[800px] max-h-[700px]
z-[100] absolute top-0 md:top-20 2xl:top-30 left-0 right-0 mx-auto max-w-5xl overflow-hidden rounded-md text-white bg-zinc-900 p-5'
			>
				<div className='w-full flex m-auto'>
					<form className='w-full flex space-x-4'>
						<label className='text-white m-auto'>
							<BsSearch size={20} />
						</label>
						<input
							className='w-full h-full flex-1 bg-transparent outline-none pl-2 rounded-md text-white font-bold text-lg cursor-pointer'
							placeholder='Search...'
							type='search'
							autoComplete='off'
							spellCheck='false'
							minLength='3'
							maxLength='48'
							value={searchTerm}
							onChange={handleChange}
						></input>
						<button
							onClick={handleOpenModal}
							className='block text-sm border-[1px] border-white px-2 h-6 rounded-lg self-auto'
						>
							esc
						</button>
					</form>
				</div>
				<div className='h-[1px] max-w-[100%] bg-zinc-800 mx-auto mt-4'></div>
				<div className='w-full max-h-[700px] relative overflow-y-scroll scroll-smooth scrollbar-hide'>
					<div className='p-2'>
						<ul className=''>
							{searchResults.map((movie) => (
								<div
									key={movie.release_date}
									className='bg-zinc-800 hover:bg-zinc-700 duration-[200ms] ease-in rounded-md flex p-2 mb-2'
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalResults;
