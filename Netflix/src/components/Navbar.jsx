import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import userAvatar from '../assets/userAvatar.png';
import ModalResults from './ModalResults';
import './Navbar.css';

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [showDialogProfile, setShowDialogProfile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { user, logOut } = UserAuth();

	const navigate = useNavigate();

	const handleOpenModal = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.key === 'Escape') setIsOpen(false);
		};

		document.addEventListener('keydown', handleKeyPress);

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

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

	// TODO
	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (window.scrollY > 100) {
	// 			setIsScrolled(true);
	// 		} else {
	// 			setIsScrolled(false);
	// 		}
	// 	};
	// 	window.addEventListener('scroll', handleScroll);

	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);
	// TODO

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
				</div>
				<div className='relative max-w-full'>
					<div className='flex items-center space-x-4'>
						{/* <SearchBar /> */}
						<div
							onClick={handleOpenModal}
							className='bg-zinc-900/60 hover:bg-zinc-800 duration-[250ms] ese-in w-28 h-9 rounded-md flex justify-between items-center p-2 cursor-pointer'
						>
							<p className='text-white font-semibold text-sm'>Search...</p>
							<BsSearch size={20} className='text-white' />
						</div>
						{user?.email && (
							<div className='cursor-pointer flex flex-col items-center space-x-2'>
								<img
									src={userAvatar}
									alt='User Avatar'
									className='w-[35px] rounded'
									onClick={handleShowDialog}
								/>
							</div>
						)}
						{/* TODO  */}
					</div>
					{showDialogProfile && (
						<div className='bg-black/70 text-white rounded-md absolute top-10 right-0 flex flex-col items-center w-20 py-1'>
							<div className='hover:text-black ease-out duration-[200ms] w-full-h-full '>
								<button className='w-full h-full text-sm font-bold  hover:bg-white rounded p-[2px]'>
									<Link to='/account'>Account</Link>
								</button>
							</div>
							<div className='hover:text-black ease-out duration-[200ms] w-full-h-full'>
								<button
									className='text-sm font-bold  hover:bg-white rounded p-[2px]'
									onClick={handleLogOut}
								>
									Logout
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
			{isOpen && <ModalResults handleOpenModal={handleOpenModal} />}
		</>
	);
}

export default Navbar;
