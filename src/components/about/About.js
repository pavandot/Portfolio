import React from "react";
import { SecurityUser } from "iconsax-react";
const About = ({ isDark }) => {
	const iconColorLight = "#12181b";
	const iconColorDark = "#fff";
	return (
		<section className='bg-background-light dark:bg-background-dark px-5 md:px-[100px] transition-colors duration-300 flex w-full justify-center items-center md:items-start md:justify-between py-10 flex-col  md:flex-row-reverse ' id='about'>
			<div className='md:w-[70%] mb-10 md:pb-auto '>
				<div className='flex items-center  mb-[15px] '>
					<SecurityUser size='27' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
					<span className='font-bold text-[1.5rem] self-end text-text-bold dark:text-[#fff] pl-[2px] transition-all duration-500'>ABOUT ME</span>
				</div>
				<p className={`${isDark ? "text-text-dark" : "text-text-light"} text-2xl font-medium md:pr-[80px]`}>
					Hello! My name is <span className='bg-gradient-to-r from-[#FA8142] to-[#FF4088] text-white rounded p-[1px] sm:p-[2px] :mx-[5px] whitespace-pre sm:whitespace-normal'>Pavan Kumar</span> - I absolutely love the process of creating things through
					code. It involves a combination of some of my favorite things: logic, creativity, and computers! I genuinely have a passion for people and always enjoy meeting new people!
				</p>
			</div>
			<div className='md:w-[30%] mr-[50px]'>
				<img src='https://pavandot.netlify.app/static/media/profile.275b4e06.jpg' alt='my img' width='300' className=' rounded-lg' />
			</div>
		</section>
	);
};

export default About;
