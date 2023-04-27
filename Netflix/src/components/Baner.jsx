import React from 'react';
import axios from 'axios';
import requests from '../Requests';
import { useEffect, useState } from 'react';

function Baner() {
	const [movies, setMovies] = useState([]);

	const randomMovie = movies[Math.floor(Math.random() * movies.length)];

	useEffect(() => {
		axios.get(requests.popular).then((response) => {
			setMovies(response.data.results);
		});
	}, []);
	console.log(randomMovie);

	return (
		<div className='w-full h-[500px] text-white'>
			<div className='w-full h-full'>
				<div className='absolute w-full h-[500px] bg-gradient-to-r from-black'></div>
				<img
					src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
					alt={randomMovie?.title}
					className='object-cover w-full h-full'
				/>
				<div>
					<button></button>
					<button></button>
				</div>
			</div>
		</div>
	);
}

export default Baner;
