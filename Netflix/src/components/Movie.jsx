import cx from 'classnames';
import SliderContext from '../context/SliderContext';
import ShowDetailsButton from './ShowDetailsButton';

const Movie = ({ movie, index }) => (
	<SliderContext.Consumer>
		{({ onSelectSlide, currentSlide, elementRef }) => {
			const isActive = currentSlide && currentSlide.id === index;
			return (
				<div
					ref={elementRef}
					className={cx('movie', {
						'movie--open': isActive,
					})}
				>
					<img
						src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
						alt={movie?.title}
						className='w-full h-full align-top'
					/>
					<ShowDetailsButton onClick={() => onSelectSlide(movie)} />
				</div>
			);
		}}
	</SliderContext.Consumer>
);
export default Movie;

// import { useState } from 'react';
// import { FaPlay } from 'react-icons/fa';
// import { BiPlus } from 'react-icons/bi';
// import SliderContext from '../context/SliderContext';
// import ShowDetailsButton from './';
// import { BsHandThumbsUp, BsChevronDown } from 'react-icons/bs';

// function Movie({ movie }) {
// 	const [isHovered, setIsHovered] = useState(false);

// 	return (
// 		<div className='block w-[300px] h-[160px] overflow'>
// 			<div
// 				className='hover:absolute hover:translate-z hover:scale-(1.2) duration-[250ms] hover:block w-[300px] h-[160px]'
// 				// style={{ transform: 'translateZ(0)' }}
// 				onMouseEnter={() => setIsHovered(true)}
// 				onMouseLeave={() => setIsHovered(false)}
// 			>
// 				<img
// 					className='block w-full h-full object-cover

// 							 rounded-t'
// 					src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
// 					alt={movie?.title}
// 				/>

// 				{isHovered && (
// 					<div className='block w-[300px] p-2 bg-zinc-900 rounded-b '>
// 						<div className='w-full font-bold text-white mb-2'>
// 							<span>{movie?.title}</span>
// 						</div>
// 						<div className='flex items-center justify-between text-white w-full'>
// 							<div className='flex space-x-2'>
// 								<button>
// 									<FaPlay
// 										size={30}
// 										className='p-1 border border-white rounded-full'
// 									/>
// 								</button>
// 								<button>
// 									<BiPlus
// 										size={30}
// 										className='p-1 border border-white rounded-full'
// 									/>
// 								</button>
// 								<button>
// 									<BsHandThumbsUp
// 										size={30}
// 										className='p-1 border border-white rounded-full'
// 									/>
// 								</button>
// 							</div>
// 							<div className=' text-white p-1 border border-white rounded-md'>
// 								<BsChevronDown size={20} />
// 							</div>
// 						</div>
// 						<div className='flex items-center space-x-2 mt-2'>
// 							<p className='font-semibold text-xs text-green-500'>
// 								Match: {Math.round(movie?.vote_average * 10)}%
// 							</p>
// 							<p className='text-white flex justify-center items-center px-2 text-[10px] border-[1px] font-semibold ml-3 rounded-md'>
// 								HD
// 							</p>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// }
// export default Movie;
