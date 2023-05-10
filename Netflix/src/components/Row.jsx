import axios from 'axios';
import { useEffect, useState } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import Movie from './Movie';

function Row({ title, dataURL, rowID }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(dataURL).then(({ data: { results } }) => {
			setMovies(results);
		});
	}, [dataURL]);

	const prevBtn = () => {
		let slider = document.getElementById('slider' + rowID);
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const nextBtn = () => {
		let slider = document.getElementById('slider' + rowID);
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<>
			<div className='px-2 py-4 relative'>
				<span className='before:block before:absolute before:-inset-[1px] before:-skew-y-3 before:bg-red-600 relative inline-block'>
					<span className='text-white font-bold md:text-xl lg:text-2xl px-5 relative'>
						{title}
					</span>
				</span>
			</div>
			<div className='relative flex items-center '>
				<BiLeftArrow
					onClick={prevBtn}
					size={35}
					className='bg-white left-0 rounded-lg absolute opacity-50 hover:opacity-100 cursor-pointer z-[20] hidden  ml-2'
				/>
				<div
					id={'slider' + rowID}
					className='relative w-full overflow-x-scroll space-x-1 whitespace-nowrap scroll-smooth scrollbar-hide'
				>
					{movies.map((movie, i) => (
						<Movie key={i} movie={movie} />
					))}
				</div>
				<BiRightArrow
					onClick={nextBtn}
					size={35}
					className='bg-white right-0 rounded-lg absolute opacity-50 hover:opacity-100 cursor-pointer z-[20] hidden   mr-2'
				/>
			</div>
		</>
	);
}

export default Row;
