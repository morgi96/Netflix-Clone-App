import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const ShowDetailsButton = ({ onClick }) => {
	<button onClick={onClick} className='show-details-button'>
		<span>
			<BsChevronDown />
		</span>
	</button>;
};

export default ShowDetailsButton;
