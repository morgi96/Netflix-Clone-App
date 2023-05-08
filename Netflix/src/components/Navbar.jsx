import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import SearchBar from './SearchBar';
import userAvatar from '../assets/userAvatar.png';
import './Navbar.css';

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [showDialogProfile, setShowDialogProfile] = useState(false);
	const { user, logOut } = UserAuth();

	const navigate = useNavigate();

	const handleLogOut = async () => {
		try {
			await logOut();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const handleShowDialog = () => {
		setShowDialogProfile(!showDialogProfile);
	};

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
		<>
			<div
				className={`w-full flex items-center justify-between px-8 z-[50] absolute transition duration-[300ms] ease-out ${
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

				{/* Box with search button / user avatar & logout  */}
				<div className='relative max-w-full'>
					<div className='flex items-center space-x-4'>
						{/* <SearchBar /> */}
						<button className=''>
							<BsSearch size={20} className='text-white' />
						</button>
						{user?.email && (
							<div className='cursor-pointer flex flex-col items-center space-x-2'>
								{/* <Link to='/account'> */}
								<img
									src={userAvatar}
									alt='User Avatar'
									className='w-[30px] rounded'
									onClick={handleShowDialog}
								/>
								{/* </Link> */}
								{/* <HiChevronDown className='text-white' size={25} /> */}
							</div>
						)}
						{/* FIXME  */}
					</div>
					{showDialogProfile && (
						<div className='bg-black/70 text-white rounded absolute top-10 mr-10 p-[10px] flex items-center h-8 hover:bg-white hover:text-black ease-out duration-[200ms]'>
							<button className='text-sm font-bold' onClick={handleLogOut}>
								Logout
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Navbar;
