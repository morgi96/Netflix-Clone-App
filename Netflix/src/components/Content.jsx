import React from 'react';
import ShowDetailsButton from './ShowDetailsButton';

const Content = ({ movie, onClose }) => {
	return (
		<div className='relative h-[37vw] mt-[-40px]'>
			<div className='w-full'></div>
			<div className='h-full w-full left-0 right-0 z-[5]'>
				<div className='px-[70px] py-[30px]'>
					<div>
						<span>{movie?.title}</span>
						<button onClick={handleClose}>X</button>
					</div>
					<div>
						<p>{movie?.overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
