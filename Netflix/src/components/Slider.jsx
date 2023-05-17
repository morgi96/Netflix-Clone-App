import React, { useRef, useState } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import Content from './Content';
import SliderContext from '../context/SliderContext';

function Slider({ children }) {
	const [isHovered, setIsHovered] = useState(false);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const sliderRef = useRef();

	const handleSelect = (movie) => {
		if (selectedMovie && selectedMovie.id === movie.id) {
			setSelectedMovie(null);
		} else {
			setSelectedMovie(movie);
		}
	};

	const handleClose = () => {
		setSelectedMovie(null);
	};

	const scrollSlider = (scrollOffset) => {
		sliderRef.current.scrollLeft += scrollOffset;
	};

	const contextValue = {
		selectedMovie,
		handleSelect,
		handleClose,
	};

	return (
		<SliderContext.Provider value={contextValue}>
			<div
				className='relative flex items-center'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{isHovered && (
					<BiLeftArrow
						onClick={() => scrollSlider(-500)}
						size={35}
						className='text-white bg-black/50 hover:bg-black/80 h-[160px] left-0 absolute cursor-pointer z-[20] duration-[250ms] ease-out'
					/>
				)}
				<div
					ref={sliderRef}
					className='px-10 flex overflow-x-scroll scroll-smooth scrollbar-hide relative items-center space-x-3'
				>
					{children}
				</div>
				{isHovered && (
					<BiRightArrow
						onClick={() => scrollSlider(500)}
						size={35}
						className='text-white bg-black/50 hover:bg-black/80 h-[160px] right-0 absolute cursor-pointer z-[20] duration-[250ms] ease-out'
					/>
				)}
			</div>
			{selectedMovie && <Content movie={selectedMovie} onClose={handleClose} />}
		</SliderContext.Provider>
	);
}

export default Slider;
