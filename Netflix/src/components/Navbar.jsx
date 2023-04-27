import { BsSearch } from 'react-icons/bs';
import userAvatar from '../assets/userAvatar.png';
import './Navbar.css';

function Navbar() {
	return (
		<div className='w-full bg-black/80 flex items-center justify-between px-8 z-[50] absolute'>
			<h1 className='text-red-600 font-bold text-[3rem] cursor-pointer'>
				NETFLIX
			</h1>
			<div className='max-w-[400px]'>
				<ul className='flex space-x-4 text-gray-400 text-base'>
					<li className='nav__link'>Home</li>
					<li className='nav__link'>Top rated</li>
					<li className='nav__link'>Popular</li>
					<li className='nav__link'>Favourite</li>
				</ul>
			</div>

			<div className=''>
				<div className='flex items-center space-x-4'>
					<button className='hover:'>
						<BsSearch size={25} className='text-white' />
					</button>
					<div className='cursor-pointer'>
						<img src={userAvatar} alt='User Avatar' className='w-[35px]' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

{
	/* <button className='bg-white text-black px-4 py-2 rounded-md'>
					Sign In
				</button>
				<button className='bg-red-600 px-4 py-2 ml-4 rounded-md text-white'>
					Sign Up
				</button> */
}
