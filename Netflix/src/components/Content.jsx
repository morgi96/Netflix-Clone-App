import { useContext, useState } from 'react';
import SliderContext from '../context/SliderContext';
import { AiOutlineClose } from 'react-icons/ai';

function Content({ movie }) {
	const { handleClose } = useContext(SliderContext);
	const [isActive, setIsActive] = useState(movie);

	return (
		<div
			className={`content ${
				isActive ? 'translate-x-0' : 'translate-x-[-100%]'
			} duration-[500ms] ease transition-transform
			 h-[50vh] relative flex`}
		>
			<div className='absolute w-full h-full bg-gradient-to-r from-black from-40% to-100%'></div>
			<div className='w-[40%] relative p-10'>
				<div className='flex items-center justify-between mb-4'>
					<span className='text-white text-3xl font-bold'>{movie?.title}</span>
					<button onClick={handleClose}>
						<AiOutlineClose className='text-white text-2xl' />
					</button>
				</div>
				<p className='text-white lg:max-w-[70%]'>{movie?.overview}</p>
			</div>
			<div className='w-[60%]'>
				<img
					className='object-cover w-full h-full'
					src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
				/>
			</div>
		</div>
	);
}

export default Content;
