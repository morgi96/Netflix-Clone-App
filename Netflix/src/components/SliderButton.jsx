import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const SliderButton = ({ onClick, type }) => (
	<button
		className={`slider-button slider-button--${type} z-[99]`}
		onClick={onClick}
	>
		<span>
			<BsChevronDown className='text-white' />
		</span>
	</button>
);

export default SliderButton;
