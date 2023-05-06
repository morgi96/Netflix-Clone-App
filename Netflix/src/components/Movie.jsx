import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';

function Movie({ movie }) {
	const setVoteColor = (vote) => {
		if (vote >= 8) {
			return 'text-green-900';
		}
		if (vote >= 5) {
			return 'text-orange-600';
		} else {
			return 'text-red-900';
		}
	};

	return (
		<div className='relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] inline-block cursor-pointer p-2 hover:scale-105 duration-[300ms] ease-out'>
			<div
				className={`bg-black/80 px-2 py-2 absolute top-4 right-4  ${setVoteColor(
					movie?.vote_average
				)} rounded text-md font-bold`}
			>
				{movie?.vote_average}
			</div>
			<img
				className='w-full h-auto block'
				src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
				alt={movie?.title}
			/>
			<div className='absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/70 duration-[300ms] ease-in-out text-white'>
				<p className='white-space-normal text-xs md:text-sm  font-bold flex items-center justify-center h-full text-center'>
					{movie?.title}
				</p>
				{/* <p>
					{like ? (
						<FaHeart className='absolute top-4 left-4' />
					) : (
						<FaRegHeart className='absolute top-4 left-4' />
					)}
				</p> */}
			</div>
		</div>
	);
}

export default Movie;
