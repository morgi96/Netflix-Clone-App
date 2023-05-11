import { BsCalendarCheck } from 'react-icons/bs';

function MovieVertical({ movie }) {
	return (
		<div className='w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] inline-block cursor-pointer p-1 duration-[300ms] ease-out my-[40px]'>
			<div className='bg-red-700 p-4 absolute top-1 right-1 rounded-bl-lg text-sm font-bold '>
				{/* {movie?.release_date} */}
				<BsCalendarCheck size={20} className='text-white' />
			</div>
			<img
				className='object-cover hover:scale-[1.2] duration-[250ms] ease-out
					'
				src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
				alt={movie?.title}
			/>
		</div>
	);
}

export default MovieVertical;
