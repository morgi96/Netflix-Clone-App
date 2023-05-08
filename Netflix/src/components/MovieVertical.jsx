function MovieVertical({ movie }) {
	return (
		<div className='relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[320px] inline-block cursor-pointer p-2 hover:scale-105 duration-[300ms] ease-out'>
			<div className='bg-red-700 px-2 py-2 absolute top-0 right-0 text-white rounded-bl-lg text-sm font-bold'>
				{movie?.release_date}
			</div>
			<img
				className='w-full h-auto block object-cover'
				src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
				alt={movie?.title}
			/>
		</div>
	);
}

export default MovieVertical;
