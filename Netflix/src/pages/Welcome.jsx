// import './Welcome.css';
import { Link } from 'react-router-dom';

function Welcome() {
	const handleSubmit = (e) => {
		e.prevent.default();
	};

	return (
		<div className='h-full'>
			<div className='w-full min-h-full relative'>
				<div className='w-full h-[90px] absolute top-0 z-10'>
					<h1 className='font-bold text-[3rem] text-red-600 ml-[3%]'>
						NETFLIX
					</h1>
				</div>
				<div className='w-full min-h-screen block overflow-hidden opacity-[50%] bg-cover h-full absolute -z-10'>
					<img
						className='min-h-full min-w-full'
						src='https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/82ae19a6-65c8-4965-84dc-84d66b042080/PL-pl-20230417-popsignuptwoweeks-perspective_alpha_website_small.jpg'
						srcSet='https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/82ae19a6-65c8-4965-84dc-84d66b042080/PL-pl-20230417-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/82ae19a6-65c8-4965-84dc-84d66b042080/PL-pl-20230417-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/82ae19a6-65c8-4965-84dc-84d66b042080/PL-pl-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w'
						alt='Netflix Clone Login Screen'
					/>
				</div>
				<div className='before:content[] before:h-[91px] before:block after:content[] after:h-[236px] after:block max-w-[550px] xl:max-w-[650px] min-h-screen bg-transparent rounded mx-auto -mb[236px] px-[5%]'>
					<div>
						<div className='bg-black/70 flex flex-col rounded-md text-white text-xl px-14 py-14 z-[90] w-full'>
							<div className='flex-grow'>
								<h1 className='text-white text-3xl font-semibold mb-6'>
									Zaloguj się
								</h1>
								<form onSubmit={handleSubmit} className='w-full'>
									<div className='max-w-full pb-4'>
										<input
											type='text'
											placeholder='E-mail or phone number'
											className='h-12 rounded w-full relative text-[16px] bg-zinc-800 p-4'
										/>
									</div>
									<div>
										<input
											type='text'
											placeholder='Password'
											className='h-12 rounded w-full relative text-[16px] bg-zinc-800 p-4'
										/>
									</div>
								</form>
								<div className='w-full text-center mt-10'>
									<a href='/home'>
										<button
											className='w-full text-center text-white text-base bg-red-700 px-4 py-3 rounded'
											onClick={redirectHome}
										>
											Zaloguj się
										</button>
									</a>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
