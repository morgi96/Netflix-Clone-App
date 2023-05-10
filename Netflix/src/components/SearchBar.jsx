// import { useState, useContext, useEffect } from 'react';
// import { BsSearch } from 'react-icons/bs';
// import requests, { getMovieBySearch } from '../Requests';
// import axios from 'axios';
// import MoviesContext from '../context/moviesContext';

// function SearchBar({ handleSearch }) {
// 	const [termSearch, setTermSearch] = useState('');
// 	const [movies, setMovies] = useState([]);
// 	const movies = useContext(MoviesContext);

// 	const handleFormSubmit = (e) => {
// 		e.preventDefault();
// 		const url = getMovieBySearch(termSearch);
// 		axios.get(url).then(({ data: { results } }) => {
// 			setMovies(results);
// 		});

// 		setTermSearch('');
// 	}

// 	const handleChange = (e) => {
// 		setTermSearch(e.target.value);
// 		handleSearch(e.targer.valute);
// 	};
// 	console.log(termSearch);
// 	return (
// 		<>
// 			<div className='relative'>
// 				<form onSubmit={handleFormSubmit}>
// 					<div className='flex items-center space-x-4'>
// 						<input
// 							className='p-1 text-black outline-none w-[160px] rounded'
// 							type='search'
// 							placeholder='Search...'
// 							value={termSearch}
// 							onChange={handleChange}
// 						></input>
// 						<button className=''>
// 							<BsSearch size={25} className='text-white' />
// 						</button>
// 					</div>
// 				</form>
// 				<div className='bg-emerald-900 absolute w-[160px]'>
// 					<ul className='w-full'>
// 						{termSearch &&
// 							movies.map((movie) => (
// 								<li key={movie?.title} className='text-sm'>
// 									{movie?.title}
// 								</li>
// 							))}
// 					</ul>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default SearchBar;
