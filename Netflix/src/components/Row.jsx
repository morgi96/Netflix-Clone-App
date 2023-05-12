import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import Movie from './Movie';

function Row({ dataURL, title }) {
	const [movies, setMovies] = useState([]);
	const sliderRef = useRef(null);

	useEffect(() => {
		axios.get(dataURL).then(({ data: { results } }) => {
			setMovies(results);
		});
	}, [dataURL]);

	const scrollSlider = (scrollOffset) => {
		sliderRef.current.scrollLeft += scrollOffset;
	};

	return (
		<section className='w-full'>
			<div className='px-2 py-4 my-4 overflow-hidden'>
				{/* <span className='relative inline-block before:block before:absolute before:-inset-[1px] before:-skew-y-3 before:bg-red-600'> */}
				<span className='relative text-white font-bold md:text-xl lg:text-2xl px-5'>
					{title}
				</span>
				{/* </span> */}
			</div>
			<div className='relative flex items-center h-[200px]'>
				<BiLeftArrow
					onClick={() => scrollSlider(-1000)}
					size={35}
					className='text-white bg-black/50 hover:bg-black/80 h-[160px] left-0 absolute cursor-pointer z-[20]'
				/>
				<div
					ref={sliderRef}
					className='flex overflow-x-scroll scroll-smooth scrollbar-hide'
				>
					{movies.map((movie) => (
						<Movie key={movie?.id} movie={movie} />
					))}
				</div>
				<BiRightArrow
					onClick={() => scrollSlider(1000)}
					size={35}
					className='text-white bg-black/50 hover:bg-black/80 h-[160px] right-0 absolute cursor-pointer z-[20]'
				/>
			</div>
		</section>
	);
}
export default Row;
