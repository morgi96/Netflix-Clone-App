import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import Movie from './Movie';

function Row({ title, dataURL }) {
	const [movies, setMovies] = useState([]);
	const [isHovered, setIsHovered] = useState(false);
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
		<>
			<div className='px-2 py-4 relative overflow-hidden'>
				<span className='before:block before:absolute before:-inset-[1px] before:-skew-y-3 before:bg-red-600 relative inline-block'>
					<span className='text-white font-bold md:text-xl lg:text-2xl px-5 relative'>
						{title}
					</span>
				</span>
			</div>
			<div
				className='relative flex items-center overflow-visible'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{isHovered && (
					<BiLeftArrow
						onClick={() => scrollSlider(-500)}
						size={35}
						className={`text-white left-0 h-full absolute bg-black/50 hover:bg-black/90 ease-out transition-colors duration-[250ms] cursor-pointer z-[20] ${
							isHovered ? '' : 'hidden'
						}`}
					/>
				)}
				<div
					className='w-full overflow-x-scroll space-x-1 whitespace-nowrap scroll-smooth scrollbar-hide'
					ref={sliderRef}
				>
					{movies.map((movie, i) => (
						<Movie movie={movie} />
					))}
				</div>
				{isHovered && (
					<BiRightArrow
						onClick={() => scrollSlider(500)}
						size={35}
						className={`text-white right-0 h-full absolute  bg-black/50 hover:bg-black/90 ease-out transition-colors duration-[250ms] cursor-pointer z-[20]${
							isHovered ? '' : 'hidden'
						}`}
					/>
				)}
			</div>
		</>
	);
}

export default Row;
