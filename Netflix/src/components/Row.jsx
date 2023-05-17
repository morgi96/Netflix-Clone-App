import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Slider from './Slider';

function Row({ API_URL, title }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(API_URL).then(({ data: { results } }) => {
			setMovies(results);
		});
	}, [API_URL]);

	return (
		<section className='w-full mb-5'>
			<div className='py-4 my-2 overflow-hidden'>
				<span className='text-white font-bold md:text-xl lg:text-2xl px-10'>
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
