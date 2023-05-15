import React, { useRef } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

function Slider({ children }) {
	const sliderRef = useRef();

	const scrollSlider = (scrollOffset) => {
		sliderRef.current.scrollLeft += scrollOffset;
	};

	return (
		<div className='relative flex items-center'>
			<BiLeftArrow
				onClick={() => scrollSlider(-1000)}
				size={35}
				className='text-white bg-black/50 hover:bg-black/80 h-[160px] left-0 absolute cursor-pointer z-[20]'
			/>
			<div
				ref={sliderRef}
				className='flex overflow-x-scroll scroll-smooth scrollbar-hide relative items-center'
			>
				{children}
			</div>
			<BiRightArrow
				onClick={() => scrollSlider(1000)}
				size={35}
				className='text-white bg-black/50 hover:bg-black/80 h-[160px] right-0 absolute cursor-pointer z-[20]'
			/>
		</div>
	);
}

export default Slider;
