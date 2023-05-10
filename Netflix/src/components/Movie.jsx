import { useState } from 'react';

function Movie({ movie }) {
	// const [showModal, setShowModal] = useState(false);

	// const handleMouseEnter = () => {
	// 	setShowModal(true);
	// };

	// const handleMouseLeave = () => {
	// 	setShowModal(false);
	// };
	// console.log(showModal);

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
		<>
			<div className='relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] inline-block cursor-pointer hover:scale-110 duration-[300ms] ease-out '>
				<div
					className={`bg-black/80 px-2 py-2 absolute top-4 right-4  ${setVoteColor(
						movie?.vote_average
					)} rounded text-md font-bold`}
				>
					{movie?.vote_average}
				</div>
				<div className=''>
					<img
						// onMouseEnter={handleMouseEnter}
						// onMouseLeave={handleMouseLeave}
						className='w-full block rounded z-[100]'
						src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
						alt={movie?.title}
					/>
					{/* <div className='absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/70 duration-[300ms] ease-in-out text-white'>
					<p className='white-space-normal text-xs md:text-sm  font-bold flex items-center justify-center h-full text-center'>
						{movie?.title}
					</p>
				</div> */}
					{/* {showModal && (
						<div className='absolute w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] bg-emerald-900 z-[100]'>
							{movie.title}
						</div>
					)} */}
				</div>
			</div>
		</>
	);
}

export default Movie;
