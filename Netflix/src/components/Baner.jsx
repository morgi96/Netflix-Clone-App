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

	const truncate = (str, n) => {
		if (str?.length > n) {
			return str.slice(0, n) + '...';
		} else {
			return str;
		}
	};
	return (
		<div className='w-full h-[550px] text-white'>
			<div className='w-full h-full'>
				<div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
				<img
					src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
					alt={randomMovie?.title}
					className='object-cover w-full h-full'
				/>
				<div className='absolute w-full top-[25%] p-4 md:p-8'>
					<h1 className='mb-4 font-bold text-2xl md:text-4xl'>
						{randomMovie?.title}
					</h1>
					<div className='my-5'>
						<button className='rounded bg-white text-black font-bold py-[4px] px-4'>
							Play
						</button>
						<button className='rounded bg-gray-600 py-[4px] px-4 ml-4'>
							More informations
						</button>
					</div>

					<p className='max-w-[60%] md:max-w-[60%] lg:max-w-[45%] xl:max-w-[30%]'>
						{truncate(randomMovie?.overview, 150)}
					</p>
					<p className='text-gray-500 pt-2 text-sm w-full md:max-w-[60%] lg:max-w-[45%] xl:max-w-[30%]'>
						Released: {randomMovie?.release_date}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Baner;
