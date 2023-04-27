import './Welcome.css';

function Welcome() {
	return (
		<div className='h-full'>
			<div className='w-full min-h-full relative m-0'>
				<div className='w-full h-[90px] absolute top-0 z-10'>
					<h1 className='font-bold text-[3rem] text-red-600 ml-[3%]'>
						NETFLIX
					</h1>
				</div>
				<div className='w-full min-h-screen block overflow-hidden opacity-[50%] bg-cover h-full absolute -z-10'>
					<img
						className='min-h-screen min-w-full'
						src='https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/82ae19a6-65c8-4965-84dc-84d66b042080/PL-pl-20230417-popsignuptwoweeks-perspective_alpha_website_small.jpg'
						srcset='https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/82ae19a6-65c8-4965-84dc-84d66b042080/PL-pl-20230417-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/82ae19a6-65c8-4965-84dc-84d66b042080/PL-pl-20230417-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/82ae19a6-65c8-4965-84dc-84d66b042080/PL-pl-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w'
					/>
				</div>
				<div className='before:content[] before:h-[91px] before:block after:content[] after:h-[236px] after:block max-w-[550px] min-h-screen bg-transparent rounded mx-auto -mb[236px] px-[5%]'>
					<div>
						<div className='bg-black/70 flex flex-col rounded-md text-white text-xl px-14 py-14 z-[90] w-full'>
							<div className='flex-grow'>
								<h1 className='text-white text-3xl font-semibold mb-6'>
									Zaloguj się
								</h1>
								<form className='w-full'>
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
									<button className='w-full text-center text-white text-base bg-red-700 px-4 py-2 rounded'>
										Zaloguj się
									</button>
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
