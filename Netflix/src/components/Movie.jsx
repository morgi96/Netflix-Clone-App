import { useContext } from 'react';
import SliderContext from '../context/SliderContext';

function Movie({ movie }) {
	const { handleSelect, selectedMovie } = useContext(SliderContext);
	const isActive = selectedMovie && selectedMovie.id === movie.id;

	return (
		<img
			className={
				isActive ? 'movie scale-110 duration-[200ms] ease-out' : 'movie'
			}
			src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
			alt={movie?.title}
			onClick={() => handleSelect(movie)}
		/>
	);
}
export default Movie;
