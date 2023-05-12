import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AuthForm({ title, actionText, accountText, onSubmit }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await onSubmit(email, password);
			navigate('/home');
		} catch (error) {
			console.log(error);
			setError('Password or email is incorrect.');
		}
	};

	useEffect(() => {
		if (error) {
			const timeout = setTimeout(() => {
				setError('');
			}, 5000);

			return () => clearTimeout(timeout);
		}
	}, [error]);

	return (
		<div className='min-h-full relative'>
			<div className='w-full h-[90px] absolute top-0 z-10'>
				<h1 className='font-bold text-[3rem] text-red-600 ml-[3%]'>NETFLIX</h1>
			</div>
			<div className='w-full min-h-screen block overflow-hidden opacity-[50%] bg-cover h-full absolute -z-10'>
				<img
					className='hidden sm:block min-h-full min-w-full object-cover'
					src='https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/82ae19a6-65c8-4965-84dc-84d66b042080/PL-pl-20230417-popsignuptwoweeks-perspective_alpha_website_small.jpg'
					srcSet='https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/82ae19a6-65c8-4965-84dc-84d66b042080/PL-pl-20230417-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/82ae19a6-65c8-4965-84dc-84d66b042080/PL-pl-20230417-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/82ae19a6-65c8-4965-84dc-84d66b042080/PL-pl-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w'
					alt='Netflix Clone Login Screen'
				/>
			</div>
			<div className='before:content[] before:h-[91px] before:block after:content[] after:h-[236px] after:block max-w-[500px] md:max-w-[600px] xl:max-w-[650px] min-h-screen bg-transparent rounded mx-auto -mb[236px] px-[5%]'>
				<div>
					<div className='bg-black/60 flex flex-col rounded-md text-white text-xl px-16 py-14 z-[90] w-full'>
						<div className=''>
							<h1 className='text-white text-3xl font-semibold mb-6'>
								{title}
							</h1>
							<form onSubmit={handleSubmit} className='w-full space-y-4'>
								<div>
									<input
										onChange={(e) => setEmail(e.target.value)}
										type='email'
										placeholder='E-mail or phone number'
										autoComplete='email'
										required
										className='h-12 rounded w-full relative text-[16px] bg-zinc-800 p-4 inline-block'
									/>
								</div>
								<div>
									<input
										onChange={(e) => setPassword(e.target.value)}
										type='password'
										placeholder='Password'
										autoComplete='password'
										required
										className='h-12 rounded w-full relative text-[16px] bg-zinc-800 p-4 inline-block'
									/>
								</div>
								<div className='w-full text-center mt-4'>
									{error ? (
										<p className='text-sm bg-red-400 py-2 rounded mb-4'>
											{error}
										</p>
									) : null}
									<button className='w-full text-center text-white text-base bg-red-700 px-4 py-3 rounded'>
										{actionText}
									</button>

									<div className='flex justify-between items-center text-sm mt-2'>
										<div className='text-gray-300'>
											<input className='mr-2' type='checkbox' />
											Remember me
										</div>
										<div>
											Need account?{' '}
											<Link to='/signup'>
												<button className='text-gray-400 ml-1'>
													{accountText}
												</button>
											</Link>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AuthForm;
