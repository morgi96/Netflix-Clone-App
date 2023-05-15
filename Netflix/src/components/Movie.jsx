import { useState } from 'react';

function Movie({ movie, handleClick }) {
	// const setVoteColor = (vote) => {
	// 	if (vote >= 8) {
	// 		return 'text-green-600';
	// 	}
	// 	if (vote >= 5) {
	// 		return 'text-orange-600';
	// 	} else {
	// 		return 'text-red-900';
	// 	}
	// };

	return (
		<img
			className='object-cover w-[320px] h-[160px] rounded-t'
			src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
			alt={movie?.title}
			onClick={handleClick}
		/>
	);
}
export default Movie;
