import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import Movie from './Movie';

function Row({ dataURL, title }) {
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
		<section className='w-full'>
			<div className='px-2 py-4 my-4 overflow-hidden'>
				<span className='before:block before:absolute before:-inset-[1px] before:-skew-y-3 before:bg-red-600 relative inline-block'>
					<span className='text-white font-bold md:text-xl lg:text-2xl px-5 relative'>
						{title}
					</span>
				</span>
			</div>
			<div
				className='relative flex items-center'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<BiLeftArrow
					onClick={() => scrollSlider(-1000)}
					size={35}
					className='text-white bg-black/50 hover:bg-black/80 h-[160px] left-0 absolute cursor-pointer z-[20]'
				/>

				<div
					ref={sliderRef}
					className='p-1 flex space-x-2 overflow-x-scroll scroll-smooth scrollbar-hide'
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

{
	/* <>
			<div className='relative px-2 py-4 my-4 overflow-hidden'>
				<span className='before:block before:absolute before:-inset-[1px] before:-skew-y-3 before:bg-red-600 relative inline-block'>
				<span className='text-white font-bold md:text-xl lg:text-2xl px-5 relative'>
					{title}
				</span>
				</span>
			</div>
			<div
				className='relative w-full overflow-hidden flex items-center'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{isHovered && (
					<BiLeftArrow
						onClick={() => scrollSlider(-500)}
						size={35}
						className={`text-white bg-black/50 hover:bg-black/80 h-full left-0 absolute cursor-pointer z-[20] ${
							isHovered ? '' : 'hidden'
						}`}
					/>
				)}
				<div
					ref={sliderRef}
					className='flex overflow-x-scroll scroll-smooth scrollbar-hide space-x-2 px-2 overflow-hidden'
				>
					{movies.map((movie) => (
						<Movie key={movie?.id} movie={movie} />
					))}
				</div>
				{isHovered && (
					<BiRightArrow
						onClick={() => scrollSlider(500)}
						size={35}
						className={`text-white bg-black/50 hover:bg-black/80 h-full right-0 absolute cursor-pointer z-[20]${
							isHovered ? '' : 'hidden'
						}`}
					/>
				)}
			</div>
		</> */
}

// return (
// 	<div>
// 		{/* <div className='relative px-2 py-4 my-4 overflow-hidden'>
// 			<span className='before:block before:absolute before:-inset-[1px] before:-skew-y-3 before:bg-red-600 relative inline-block'>
// 				<span className='text-white font-bold md:text-xl lg:text-2xl px-5 relative'>
// 					{title}
// 				</span>
// 			</span>
// 		</div> */}
// 		<div className='w-full mt-[10px]'>
// 			<div
// 				className='relative overflow-hidden'
// 				onMouseEnter={() => setIsHovered(true)}
// 				onMouseLeave={() => setIsHovered(false)}
// 			>
// 				{isHovered && (
// 					<BiLeftArrow
// 						onClick={() => scrollSlider(-1000)}
// 						size={35}
// 						className={`text-white bg-black/50 hover:bg-black/80 h-full left-0 absolute cursor-pointer z-[20] ${
// 							isHovered ? '' : 'hidden'
// 						}`}
// 					/>
// 				)}

// 				<div
// 					ref={sliderRef}
// 					className='flex px-2 space-x-2 overflow-x-scroll scroll-smooth scrollbar-hide'
// 				>
// 					{movies.map((movie) => (
// 						<Movie key={movie?.id} movie={movie} />
// 					))}
// 				</div>
// 				{isHovered && (
// 					<BiRightArrow
// 						onClick={() => scrollSlider(1000)}
// 						size={35}
// 						className={`text-white bg-black/50 hover:bg-black/80 h-full right-0 absolute cursor-pointer z-[20] top-0 bottom-0 m-auto${
// 							isHovered ? '' : 'hidden'
// 						}`}
// 					/>
// 				)}
// 			</div>
// 		</div>
// 	</div>
// );
