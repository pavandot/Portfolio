import React from "react";
import Image from "next/image";
import { SecurityUser } from "iconsax-react";
const About = ({ isDark }) => {
	const iconColorLight = "#12181b";
	const iconColorDark = "#fff";
	return (
		<section className='bg-background-light dark:bg-background-dark scroll-mt-28 transition-colors duration-300 ' id='about'>
			<section className='  mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-10 transition-colors duration-300 md:flex-row-reverse  md:items-start md:justify-between lg:px-[100px]'>
				<div className='md:pb-auto mb-10 md:w-[70%] '>
					<div className='mb-[15px] flex shrink-0	  items-center '>
						<SecurityUser size='27' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
						<span className='text-text-bold self-end pl-[2px] text-[1.5rem] font-bold transition-all duration-500 dark:text-[#fff]'>ABOUT ME</span>
					</div>
					<p className={`${isDark ? "text-text-dark" : "text-text-light"} text-2xl font-medium lg:pr-[80px]`}>
						Hello! My name is <span className=':mx-[5px] whitespace-pre rounded bg-gradient-to-r from-[#FA8142] to-[#FF4088] p-[1px] text-white sm:whitespace-normal sm:p-[2px]'>Pavan Kumar</span> - I absolutely love the process of creating things through
						code. It involves a combination of some of my favorite things: logic, creativity, and computers! I genuinely have a passion for people and always enjoy meeting new people!
					</p>
					<div className='mt-10 mb-5 flex w-full  space-x-3'>
						<a
							href='https://github.com/pavandot'
							target='_blank'
							rel='noreferrer'
							className=' text-text-light dark:text-text-dark rounded border-[2px] border-[#fa8142] px-[20px] py-[7px] font-semibold transition-colors duration-300 hover:bg-[#fa8142] hover:text-[#fff] dark:hover:text-[#fff]'>
							GitHub
						</a>
						<a
							href='https://twitter.com/pavanreddy0850'
							target='_blank'
							rel='noreferrer'
							className=' text-text-light dark:text-text-dark rounded border-[2px] border-[#09c372] px-[20px] py-[7px] font-semibold transition-colors duration-300 hover:bg-[#09c372] hover:text-[#fff] dark:hover:text-[#fff]'>
							Twitter
						</a>
					</div>
				</div>
				<div className='mr-[50px] md:w-[30%]'>
					<Image src='https://pavandot.netlify.app/static/media/profile.275b4e06.jpg' alt='my img' width='300' height='300' className=' rounded-lg' />
				</div>
			</section>
		</section>
	);
};

export default About;
