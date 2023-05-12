import { useState } from 'react';
import { FaPlay, FaThumbsUp } from 'react-icons/fa';
import { BiPlus } from 'react-icons/bi';
import { BsHandThumbsUp, BsChevronDown } from 'react-icons/bs';

function Movie({ movie }) {
	const [isHovered, setIsHovered] = useState(false);

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
		<div className='relative w-[600px] h-[300px] p-2 flex items-center rounded'>
			<div
				className='relative block w-[300px] h-[160px] hover:top-[-40px] duration-[350ms] hover:scale-[1.2] transition-transform ease-out z-[15] mx-2'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<img
					className='object-cover w-full h-full relative hover:z-[50]'
					src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
					alt={movie?.title}
				/>
				{isHovered && (
					<div className='w-full p-2 bg-zinc-900 rounded-b overflow-y-hidden'>
						<div className='flex items-center justify-between text-white w-full'>
							<div className='flex space-x-2'>
								<FaPlay
									size={30}
									className='p-1 border border-white rounded-full'
								/>
								<BiPlus
									size={30}
									className='p-1 border border-white rounded-full'
								/>
								<BsHandThumbsUp
									size={30}
									className='p-1 border border-white rounded-full'
								/>
							</div>
							<div className=' text-white p-1 border border-white rounded-md'>
								<BsChevronDown size={20} />
							</div>
						</div>
						<div className='flex items-center space-x-2 mt-2'>
							<p className='font-semibold text-xs text-green-500'>
								Match: {Math.round(movie?.vote_average * 10)}%
							</p>
							<p className='text-white flex justify-center items-center px-2 text-[10px] border-[1px] font-semibold ml-3 rounded-md'>
								HD
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
export default Movie;
