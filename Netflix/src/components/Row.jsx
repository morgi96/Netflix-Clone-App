import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Movie from './Movie';
import Slider from './Slider';

function Row({ dataURL, title }) {
	const [isActive, setIsActive] = useState(false);
	const [movies, setMovies] = useState([]);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		axios.get(dataURL).then(({ data: { results } }) => {
			setMovies(results);
		});
	}, [dataURL]);

	return (
		<section className='w-full'>
			<div className='px-4 py-4 my-4 overflow-hidden'>
				<span className='relative text-white font-bold md:text-xl lg:text-2xl px-5'>
					{title}
				</span>
			</div>
			<Slider>
				{movies.map((movie) => (
					<Movie key={movie?.id} movie={movie} handleClick={handleClick} />
				))}
			</Slider>
		</section>
	);
}
export default Row;
