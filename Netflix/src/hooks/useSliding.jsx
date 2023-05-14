import { useState, useRef, useEffect } from 'react ';

const PADDING = 100;

const useSliding = (elementWidth, countElements) => {
	const containerRef = useRef();
	const [containerWidth, setContainerWidth] = useState(0);
	const [distance, setDistance] = useState(0);
	const [totalInViewport, setTotalInViewport] = useState(0);
	const [viewed, setViewed] = useState(0);

	useEffect(() => {
		const containerWidth = containerRef.current.clientWidth - PADDING;
		setContainerWidth(containerRef.current);
		setTotalInViewport(Math.floor(containerWidth / elementWidth));
	}, [containerRef.current]);

	const handlePrev = () => {
		setViewed(viewed - totalInViewport);
		setDistance(distance + containerWidth);
	};

	const handleNext = () => {
		setViewed(viewed + totalInViewport);
		setDistance(distance - containerWidth);
	};

	const slideProps = {
		style: { transform: `translate3d(${distance}px, 0, 0)` },
	};

	const hasPrev = distance < 0;
	const hasNext = viewed + totalInViewport < countElements;

	return { handlePrev, handleNext, slideProps, hasPrev, hasNext };
};

export default useSliding;
