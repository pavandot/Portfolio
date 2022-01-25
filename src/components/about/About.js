import React from "react";
import { SecurityUser } from "iconsax-react";
const About = ({ isDark }) => {
	const iconColorLight = "#12181b";
	const iconColorDark = "#fff";
	return (
		<section className='bg-background-light dark:bg-background-dark transition-colors duration-300 scroll-mt-28 ' id='about'>
			<section className='  px-5 md:px-[100px] transition-colors duration-300 flex w-full justify-center items-center md:items-start md:justify-between py-10 flex-col  md:flex-row-reverse max-w-7xl mx-auto'>
				<div className='md:w-[70%] mb-10 md:pb-auto '>
					<div className='flex items-center  mb-[15px] '>
						<SecurityUser size='27' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
						<span className='font-bold text-[1.5rem] self-end text-text-bold dark:text-[#fff] pl-[2px] transition-all duration-500'>ABOUT ME</span>
					</div>
					<p className={`${isDark ? "text-text-dark" : "text-text-light"} text-2xl font-medium md:pr-[80px]`}>
						Hello! My name is <span className='bg-gradient-to-r from-[#FA8142] to-[#FF4088] text-white rounded p-[1px] sm:p-[2px] :mx-[5px] whitespace-pre sm:whitespace-normal'>Pavan Kumar</span> - I absolutely love the process of creating things through
						code. It involves a combination of some of my favorite things: logic, creativity, and computers! I genuinely have a passion for people and always enjoy meeting new people!
					</p>
					<div className='mt-10 mb-5 space-x-3 flex  w-full'>
						<a
							href='https://github.com/pavandot'
							target='_blank'
							rel='noreferrer'
							className=' text-text-light dark:text-text-dark font-semibold px-[20px] py-[7px] border-[2px] rounded border-[#fa8142] hover:bg-[#fa8142] transition-colors duration-300 hover:text-[#fff] dark:hover:text-[#fff]'>
							GitHub
						</a>
						<a
							href='https://twitter.com/pavanreddy0850'
							target='_blank'
							rel='noreferrer'
							className=' text-text-light dark:text-text-dark font-semibold px-[20px] py-[7px] border-[2px] rounded border-[#09c372] hover:bg-[#09c372] transition-colors duration-300 hover:text-[#fff] dark:hover:text-[#fff]'>
							Twitter
						</a>
					</div>
				</div>
				<div className='md:w-[30%] mr-[50px]'>
					<img src='https://pavandot.netlify.app/static/media/profile.275b4e06.jpg' alt='my img' width='300' className=' rounded-lg' />
				</div>
			</section>
		</section>
	);
};

export default About;
