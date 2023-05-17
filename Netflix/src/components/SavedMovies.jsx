import { useState, useRef } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

function SavedMovies({ children }) {
	const [isHovered, setIsHovered] = useState(false);
	const sliderRef = useRef();

	const scrollSlider = (scrollOffset) => {
		sliderRef.current.scrollLeft += scrollOffset;
	};

	return (
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
	);
}

export default SavedMovies;
