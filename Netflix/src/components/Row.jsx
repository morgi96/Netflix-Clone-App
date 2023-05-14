import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import Movie from './Movie';

function Row({ API_URL, title }) {
	const [movies, setMovies] = useState([]);
	const sliderRef = useRef(null);

	useEffect(() => {
		axios.get(API_URL).then(({ data: { results } }) => {
			setMovies(results);
		});
	}, [API_URL]);

	const scrollSlider = (scrollOffset) => {
		sliderRef.current.scrollLeft += scrollOffset;
	};

	return (
		<>
			<div className='px-4 py-4 my-4'>
				<span className='relative text-white font-bold md:text-xl lg:text-2xl px-5'>
					{title}
				</span>
			</div>
			<div className='flex flex-row items-center scroll-smooth' ref={sliderRef}>
				<BiLeftArrow
					onClick={() => scrollSlider(-1000)}
					size={35}
					className='text-white bg-black/50 hover:bg-black/80 h-[160px] left-0 absolute cursor-pointer z-[20]'
				/>
				<Slider>
					{movies.map((movie) => (
						<Movie key={movie?.id} movie={movie} />
					))}
				</Slider>
				<BiRightArrow
					onClick={() => scrollSlider(1000)}
					size={35}
					className='text-white bg-black/50 hover:bg-black/80 h-[160px] right-0 absolute cursor-pointer z-[20]'
				/>
			</div>
		</>
	);
}
export default Row;

// <section className='h-[280px] relative'>
// <div className='px-4 py-4 my-4'>
// 	<span className='relative inline-block before:block before:absolute before:-inset-[1px] before:-skew-y-3 before:bg-red-600'>
// 	<span className='relative text-white font-bold md:text-xl lg:text-2xl px-5'>
// 		{title}
// 	</span>
// 	</span>
// </div>
// <div
// 	className='flex flex-row items-center  scroll-smooth'
// 	ref={sliderRef}
// >
// 	<BiLeftArrow
// 		onClick={() => scrollSlider(-1000)}
// 		size={35}
// 		className='text-white bg-black/50 hover:bg-black/80 h-[160px] left-0 absolute cursor-pointer z-[20]'
// 	/>
// 	<div className='w-full h-full flex items-center space-x-2 grow'>
// 		{movies.map((movie) => (
// 			<Movie key={movie?.id} movie={movie} />
// 		))}
// 	</div>
// 	<BiRightArrow
// 		onClick={() => scrollSlider(1000)}
// 		size={35}
// 		className='text-white bg-black/50 hover:bg-black/80 h-[160px] right-0 absolute cursor-pointer z-[20]'
// 	/>
// </div>
// </section>
