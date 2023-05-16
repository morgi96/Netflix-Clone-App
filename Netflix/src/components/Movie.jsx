import SliderContext from '../context/SliderContext';
function Movie({ movie }) {
	return (
		<SliderContext.Consumer>
			{({ handleSelect }) => (
				<img
					className='movie'
					src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
					alt={movie?.title}
					onClick={() => handleSelect(movie)}
				/>
			)}
		</SliderContext.Consumer>
	);
}
export default Movie;
