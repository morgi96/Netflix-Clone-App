import { useState } from 'react';
import { FaPlay, FaThumbsUp } from 'react-icons/fa';
import { BiPlus } from 'react-icons/bi';
import { BsHandThumbsUp, BsChevronDown } from 'react-icons/bs';

function Movie({ movie }) {
	const [isHovered, setIsHovered] = useState(false);
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
		<div className='w-[320px] hover:-translate-y-[100px] '>
			<div className='hover:h[100px] w-[320px] shrink grow cursor-pointer'>
				<div className='block z-[10]'>
					<img
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						className='object-cover hover:h-[120px]'
						src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
						alt={movie?.title}
					/>
					{isHovered && <div className='text-white'>{movie?.title}</div>}
				</div>
			</div>
		</div>

		//FIXME - prawidłowy kod
		// <div classaName='overflow-hidden'>
		// 	<div className='block w-[320px] h-[160px] hover:w-[400px] hover:mx-[10px] hover:my-[10px] hover:h-[240px] hover:scale-105 duration-[300ms] ease-out shrink grow'>
		// 		<img
		// 			onMouseEnter={() => setIsHovered(true)}
		// 			onMouseLeave={() => setIsHovered(false)}
		// 			className='object-cover w-full h-[160px] block'
		// 			src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
		// 			alt={movie?.title}
		// 		/>
		// 		{isHovered && <div className='w-full text-white'>{movie?.title}</div>}
		// 	</div>
		//FIXME
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
