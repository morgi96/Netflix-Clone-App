import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import MovieVertical from './MovieVertical';

function RowVertical({ dataURL, title }) {
	const [moviesVertical, setMoviesVertical] = useState([]);
	const [isHovered, setIsHovered] = useState(false);
	const sliderRef = useRef(null);

	useEffect(() => {
		axios.get(dataURL).then(({ data: { results } }) => {
			setMoviesVertical(response.data.results);
		});
	}, [dataURL]);

	const scrollSlider = (scrollOffset) => {
		sliderRef.current.scrollLeft += scrollOffset;
	};

	return (
		<>
			<h2 className='text-white font-bold md:text-xl lg:text-2xl p-5'>
				{title}
			</h2>
			<div
				className='relative flex items-center overflow-visible'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{isHovered && (
					<BiLeftArrow
						onClick={() => scrollSlider(-500)}
						size={35}
						className={`bg-white left-0 rounded-lg absolute opacity-50 hover:opacity-100 cursor-pointer z-[20] ml-2 ${
							isHovered ? '' : 'hidden'
						}`}
					/>
				)}
				<div
					ref={sliderRef}
					className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-1'
				>
					{moviesVertical.map((movie, i) => (
						<MovieVertical key={i} movie={movie} />
					))}
				</div>
				{isHovered && (
					<BiRightArrow
						onClick={() => scrollSlider(500)}
						size={35}
						className={`bg-white right-0 rounded-lg absolute opacity-50 hover:opacity-100 cursor-pointer z-[20] ml-2 ${
							isHovered ? '' : 'hidden'
						}`}
					/>
				)}
			</div>
		</>
	);
}

export default RowVertical;
