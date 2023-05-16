import React, { useRef, useState } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import Content from './Content';
import SliderContext from '../context/SliderContext';

function Slider({ children }) {
	const [currentMovie, setCurrentMovie] = useState(null);
	const sliderRef = useRef();

	const scrollSlider = (scrollOffset) => {
		sliderRef.current.scrollLeft += scrollOffset;
	};

	const handleSelect = (movie) => {
		setCurrentMovie(movie);
	};

	const handleClose = () => {
		setCurrentMovie(null);
	};

	const contextValue = {
		currentMovie,
		handleSelect,
		handleClose,
	};

	return (
		<SliderContext.Provider value={contextValue}>
			<div className='relative flex items-center'>
				<BiLeftArrow
					onClick={() => scrollSlider(-1000)}
					size={35}
					className='text-white bg-black/50 hover:bg-black/80 h-[160px] left-0 absolute cursor-pointer z-[20] duration-[250ms] ease-out'
				/>
				<div
					ref={sliderRef}
					className='px-10 flex overflow-x-scroll scroll-smooth scrollbar-hide relative items-center space-x-3'
				>
					{children}
				</div>
				<BiRightArrow
					onClick={() => scrollSlider(1000)}
					size={35}
					className='text-white bg-black/50 hover:bg-black/80 h-[160px] right-0 absolute cursor-pointer z-[20] duration-[250ms] ease-out'
				/>
			</div>
			{currentMovie && <Content movie={currentMovie} onClose={handleClose} />}
		</SliderContext.Provider>
	);
}

export default Slider;
