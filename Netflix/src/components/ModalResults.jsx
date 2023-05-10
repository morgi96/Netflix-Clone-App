import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { getMovieBySearch, API_KEY } from '../Requests';

function ModalResults({ handleClose }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		handleSearch(searchTerm);
	}, [searchTerm]);

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
			setSearchResults(data.results);
		} catch (error) {
			console.error('Error data fetching, try again later...', error);
		}
	};
	//#FIXME
	// const handleSearch = (searchTerm) => {
	// 	const filteredMovies = movies.filter((movie) =>
	// 		movie.title.toLowerCase().includes(searchTerm.toLowerCase())
	// 	);
	// 	setSearchResults(filteredMovies);
	// };

	return (
		<div>
			<div className='fixed flex items-center justify-center top-0 left-0 bg-black/80 h-full w-full z-[50] blur-lg'></div>
			<div
				className='w-[700px]
z-[100] fixed top-0 md:top-20 2xl:top-30 left-0 right-0 mx-auto max-w-5xl overflow-hidden rounded-md scrollbar-hide text-white bg-zinc-900 p-5'
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
							maxLength='48'
							value={searchTerm}
							onChange={handleChange}
						></input>
						<button
							onClick={handleClose}
							className='block text-sm border-[1px] border-white px-2 h-6 rounded-lg self-auto'
						>
							esc
						</button>
					</form>
				</div>
				<div className='h-[1px] max-w-[100%] bg-zinc-800 mx-auto mt-4'></div>
				<div className='w-full max-h-[700px]'>
					<ul>
						{searchResults.map((movie) => (
							<li key={movie.id}>{movie.title}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ModalResults;
