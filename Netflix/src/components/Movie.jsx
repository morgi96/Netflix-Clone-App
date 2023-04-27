import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';

function Movie({ movie }) {
	const [like, setLike] = useState(false);
	return (
		<div className='relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] inline-block cursor-pointer p-2'>
			<img
				className='w-full h-auto block'
				src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
				alt={movie.title}
			/>
			<div className='absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/70 duration-[300ms] ease-in-out text-white'>
				<p className='white-space-normal text-xs md:text-sm  font-bold flex items-center justify-center h-full text-center'>
					{movie?.title}
				</p>
				<p>
					{like ? (
						<FaHeart className='absolute top-4 left-4' />
					) : (
						<FaRegHeart className='absolute top-4 left-4' />
					)}
				</p>
			</div>
		</div>
	);
}

export default Movie;