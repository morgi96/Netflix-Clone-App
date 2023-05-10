import axios from 'axios';
import { useEffect, useState } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import MovieVertical from './MovieVertical';

function RowVertical({ dataURL, title, rowID }) {
	const [moviesVertical, setMoviesVertical] = useState([]);

	useEffect(() => {
		axios.get(dataURL).then((response) => {
			setMoviesVertical(response.data.results);
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
			<h2 className='text-white font-bold md:text-xl lg:text-2xl p-5'>
				{title}
			</h2>
			<div className='relative flex items-center group'>
				<BiLeftArrow
					onClick={prevBtn}
					size={35}
					className='bg-white left-0 rounded-lg absolute opacity-50 hover:opacity-100 cursor-pointer z-[20] hidden group-hover:block ml-2'
				/>
				<div
					id={'slider' + rowID}
					className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-1'
				>
					{moviesVertical.map((movie, i) => (
						<MovieVertical key={i} movie={movie} />
					))}
				</div>
				<BiRightArrow
					onClick={nextBtn}
					size={35}
					className='bg-white right-0 rounded-lg absolute opacity-50 hover:opacity-100 cursor-pointer z-[20] hidden  group-hover:block mr-2'
				/>
			</div>
		</>
	);
}

export default RowVertical;
