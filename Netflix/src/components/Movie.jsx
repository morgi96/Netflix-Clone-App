import SliderContext from '../context/SliderContext';
function Movie({ movie }) {
	return (
		<SliderContext.Consumer>
			{({ handleSelect }) => (
				<img
					className='object-cover w-[320px] h-[160px] rounded-[12px] hover:scale-110 duration-[250ms] ease py-2'
					src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
					alt={movie?.title}
					onClick={() => handleSelect(movie)}
				/>
			)}
		</SliderContext.Consumer>
	);
}
export default Movie;
