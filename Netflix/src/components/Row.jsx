import axios from 'axios';
import React from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import Movie from './Movie';

function Row({ title, fetchURL, rowID }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(fetchURL).then((response) => {
			setMovies(response.data.results);
		});
	}, [fetchURL]);

	const prevBtn = () => {
		let slider = document.getElementById('slider' + rowID);
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const nextBtn = () => {
		let slider = document.getElementById('slider' + rowID);
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<>
			<h2 className='text-white font-bold md:text-xl p-5 '>{title}</h2>
			<div className='relative flex items-center group'>
				<BiLeftArrow
					onClick={prevBtn}
					size={35}
					className='bg-white left-0 rounded-lg absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
				/>
				<div
					id={'slider' + rowID}
					className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
				>
					{movies.map((movie, i) => (
						<Movie key={i} movie={movie} />
					))}
				</div>
				<BiRightArrow
					onClick={nextBtn}
					size={35}
					className='bg-white right-0 rounded-lg absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block'
				/>
			</div>
		</>
	);
}

export default Row;