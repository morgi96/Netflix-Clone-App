import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import userAvatar from '../assets/userAvatar.png';
import './Navbar.css';

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`w-full flex items-center justify-between px-8 z-[50] fixed transition duration-[300ms] ease-out ${
				isScrolled && 'bg-black'
			}`}
		>
			<div className='flex items-center'>
				<Link to='/home'>
					<h1 className='text-red-600 font-bold text-[3rem] cursor-pointer'>
						NETFLIX
					</h1>
				</Link>
				{/* <div className='max-w-[400px]'>
				
			</div> */}
				{/* <div className='w-full ml-12'>
					<ul className='w-full flex text-gray-400 text-base gap-16'>
						<li className='nav__link'>
							<Link>Home</Link>
						</li>

						<li className='nav__link'>
							<Link>Home</Link>
						</li>

						<li className='nav__link'>
							<Link>Home</Link>
						</li>

						<li className='nav__link'>
							<Link>Home</Link>
						</li>
					</ul>
				</div> */}
			</div>
			<div className=''>
				<div className='flex items-center space-x-4'>
					<SearchBar />
					<button className=''>
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
