import { useState } from 'react';
import { FaPlay, FaThumbsUp } from 'react-icons/fa';
import { BiPlus } from 'react-icons/bi';
import { BsHandThumbsUp, BsChevronDown } from 'react-icons/bs';

function Movie({ movie }) {
	// const [showModal, setShowModal] = useState(false);

	// const handleMouseEnter = () => {
	// 	setShowModal(true);
	// };

	// const handleMouseLeave = () => {
	// 	setShowModal(false);
	// };
	// console.log(showModal);

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
		// <div className=''>
		<div className='w-[400px] hover:w-[600px]'>
			<img
				className='object-cover h-[160px]'
				src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
				alt={movie?.title}
			/>
		</div>
		// </div>
		// <div className='shrink w-full'>
		// 	<div className='h-[180px]'>
		// 		<img
		// 			className='relative object-cover w-full h-full'
		// 			src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
		// 			alt={movie?.title}
		// 		/>
		// 	</div>
		// </div>
	);
}

export default Movie;

// {/* <div className='text-white bg-black flex justify-between p-2'>
// 				<div className='text-lg flex space-x-2'>
// 					<FaPlay size={25} />
// 					<BiPlus size={25} />
// 					<BsHandThumbsUp size={25} />
// 					<BsChevronDown size={25} className='text-white' />
// 				</div>
// 			</div>
// 			<div className='text-lg'>{movie?.title}</div> */}
