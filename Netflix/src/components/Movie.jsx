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
		<div className='relative w-[600px] h-[500px] px-1 flex items-center rounded'>
			<div
				className='block w-[300px] h-[160px] duration-[300ms] hover:scale-[1.1] hover:w-[320px] transition:transform ease z-[15] mx-2 grow'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<img
					className='object-cover w-full h-full rounded-t'
					src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
					alt={movie?.title}
				/>
				{isHovered && (
					<div className='w-full p-2 bg-zinc-900 rounded-b overflow-y-hidden'>
						<div className='w-full font-bold text-white mb-2'>
							{movie?.title}
						</div>
						<div className='flex items-center justify-between text-white w-full'>
							<div className='flex space-x-2'>
								<button>
									<FaPlay
										size={30}
										className='p-1 border border-white rounded-full'
									/>
								</button>
								<button>
									<BiPlus
										size={30}
										className='p-1 border border-white rounded-full'
									/>
								</button>
								<button>
									<BsHandThumbsUp
										size={30}
										className='p-1 border border-white rounded-full'
									/>
								</button>
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
