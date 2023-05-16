import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Slider from './Slider';

function Row({ dataURL, title }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(dataURL).then(({ data: { results } }) => {
			setMovies(results);
		});
	}, [dataURL]);

	return (
		<section className='w-full'>
			<div className='py-4 my-4 overflow-hidden'>
				<span className='relative text-white font-bold md:text-xl lg:text-2xl px-10'>
					{title}
				</span>
			</div>
			<Slider>
				{movies.map((movie) => (
					<Movie key={movie?.id} movie={movie} />
				))}
			</Slider>
		</section>
	);
}
export default Row;
