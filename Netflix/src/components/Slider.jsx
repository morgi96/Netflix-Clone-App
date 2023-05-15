// import React, { useState } from 'react';
// import useSizeElement from '../hooks/useSizeElement';
// import useSliding from '../hooks/useSliding';
// import SliderWrapper from './SliderWrapper';
// import SliderButton from './SliderButton';
// import SliderContext from '../context/SliderContext';
// import Content from './Content';
import React, { useState } from 'react';
import cx from 'classnames';
import SliderContext from '../context/SliderContext';
import Content from './Content';
import SliderButton from './SliderButton';
import SliderWrapper from './SliderWrapper';
import useSliding from '../hooks/useSliding';
import useSizeElement from '../hooks/useSizeElement';

function Slider({ children, activeSlide }) {
	const [currentSlide, setCurrentSlide] = useState(activeSlide);
	const { width, elementRef } = useSizeElement();

	const { handlePrev, handleNext, slideProps, hasPrev, hasNext, containerRef } =
		useSliding(width, React.Children.count(children));

	const handleSelect = (movie) => {
		setCurrentSlide(movie);
	};

	const handleClose = () => {
		setCurrentSlide(null);
	};

	const contextValue = {
		onSelectSlide: handleSelect,
		onCloseSlide: handleClose,
		elementRef,
		currentSlide,
	};

	return (
		<SliderContext.Provider value={contextValue}>
			<SliderWrapper>
				<div
					className={cx('slider', {
						'slider--open': currentSlide != null,
					})}
				>
					<div ref={containerRef} className='slider__container' {...slideProps}>
						{children}
					</div>
				</div>
				{hasPrev && <SliderButton onClick={handlePrev} type='prev' />}
				{hasNext && <SliderButton onClick={handleNext} type='next' />}
			</SliderWrapper>
			{currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
		</SliderContext.Provider>
	);
}

export default Slider;
