import React from 'react';
import Image from 'next/image';
import reactIcon from '../../public/img/reactjs.svg';
import tailwindCss from '../../public/img/tailwindcss.svg';

const Footer = ({ isDark }) => {
	return (
		<section className='bg-background-light dark:bg-background-dark  transition-colors duration-300 md:px-[100px] px-5 pb-20 pt-36 flex justify-center '>
			<div>
				<h1 className={`${isDark ? 'text-text-dark' : 'text-text-light'} text-center`}>
					Find an issue with this page?{' '}
					<a href='https://github.com/pavandot/Portfolio-v2' className=' text-[#7ca9f5]'>
						Fix it on GitHub
					</a>
				</h1>
				<div className='flex mt-6 justify-center '>
					<h1 className={`${isDark ? 'text-text-dark' : 'text-text-light'} `}>Created with</h1>
					<div className=' mx-2'>
						<Image src={reactIcon} alt='react' width='20' height='20' />
					</div>
					<div className=' mr-2'>
						<Image src={tailwindCss} alt='react' width='20' height='20' />
					</div>
					<a href='https://github.com/pavandot/' className=' text-[#7ca9f5]'>
						by Pavan Kumar
					</a>
				</div>
			</div>
		</section>
	);
};

export default Footer;
