import React from 'react';

function Navbar() {
	return (
		<div className='w-full flex items-center justify-between px-8 z-[50] absolute'>
			<h1 className='text-red-600 font-bold text-[3rem] cursor-pointer'>
				NETFLIX
			</h1>
			<div className=''>
				<button className='bg-white text-black px-4 py-2 rounded-md'>
					Sign In
				</button>
				<button className='bg-red-600 px-4 py-2 ml-4 rounded-md text-white'>
					Sign Up
				</button>
			</div>
		</div>
	);
}

export default Navbar;
