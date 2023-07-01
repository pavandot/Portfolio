import React, { useState } from 'react';
import Image from 'next/image';
import { User, Code, Moon, Sun1, TextalignJustifycenter, CloseCircle, SecurityUser, Teacher, DocumentDownload } from 'iconsax-react';
import logo from '../../public/img/logo.svg';

const Navbar = ({ isDark, setIsDark }) => {
	const [isOpen, setIsOpen] = useState(false);
	const iconColorLight = '#3F3D56';
	const iconColorDark = '#d0cde1';
	return (
		<div className='fixed w-full z-50'>
			<section className=' bg-nav-light/50 dark:bg-nav-dark/50 flex h-[58px] flex-col items-center transition-colors duration-300 sm:block sm:h-auto backdrop-blur-xl'>
				<nav className=' mx-auto flex h-[4rem] w-full max-w-7xl items-center justify-between px-3 sm:py-4 sm:px-6'>
					<div>
						<a href='#home'>
							{/* <ReactSVG src={logo} className='w-[48px]' /> */} <Image src={logo} width='48' height='48' alt='logo' />
						</a>
					</div>
					<ul className='hidden w-[80%] items-center justify-around sm:flex lg:w-[50%]'>
						{/* <a href='#about'>
							<li className='flex cursor-pointer items-center '>
								<SecurityUser size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
								<span className='self-end pl-[2px] text-[1.2rem] font-bold text-gray-500 transition-all duration-500 dark:text-[#b2becd]'>
									ABOUT
								</span>
							</li>
						</a> */}
						<a href='#skills'>
							<li className='flex cursor-pointer items-center '>
								<Teacher size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
								{/* <User size='19.2' color={` ${isDark ? "#b2becd" : "#454e56"} `} variant='Bulk'  /> */}
								<span className='self-end pl-[2px] text-[1.2rem] font-bold text-gray-500 transition-all duration-500 dark:text-[#b2becd]'>
									SKILLS
								</span>
							</li>
						</a>
						<a href='#projects'>
							<li className='flex cursor-pointer  items-center '>
								<Code size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
								<span className='pl-[2px] text-[1.2rem] font-bold text-gray-500 transition-all duration-500 dark:text-[#b2becd]'>
									PROJECT
								</span>
							</li>
						</a>
						<a
							href='https://drive.google.com/file/d/1D0Cg3XM4RGe9bwNlSeMOkf1Bm8trg6fP/view?usp=sharing'
							target='_blank'
							rel='noreferrer'
						>
							<li className='flex cursor-pointer  items-center '>
								<DocumentDownload size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
								<span className='pl-[2px] text-[1.2rem] font-bold text-gray-500 transition-all duration-500 dark:text-[#b2becd]'>
									RESUME
								</span>
							</li>
						</a>
						<li onClick={() => setIsDark(!isDark)} className='transition-all duration-300'>
							<div className={`${!isDark ? 'block' : 'hidden'}  cursor-pointer`}>
								<Moon size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bold' />
							</div>
							<div className={`${isDark ? 'block' : 'hidden'} cursor-pointer`}>
								<Sun1 size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bold' />
							</div>
						</li>
					</ul>
					<div className='flex sm:hidden'>
						<div onClick={() => setIsDark(!isDark)} className='pr-5 transition-all duration-300'>
							<div className={`${!isDark ? 'block' : 'hidden'}  cursor-pointer`}>
								<Moon size='30' color={isDark ? iconColorDark : iconColorLight} variant='Bold' />
							</div>
							<div className={`${isDark ? 'block' : 'hidden'} cursor-pointer`}>
								<Sun1 size='30' color={isDark ? iconColorDark : iconColorLight} variant='Bold' />
							</div>
						</div>
						<div onClick={() => setIsOpen(!isOpen)} className='transition-all duration-300'>
							<div className={`${!isOpen ? 'block' : 'hidden'}  cursor-pointer`}>
								<TextalignJustifycenter size='30' color={isDark ? iconColorDark : iconColorLight} variant='Outline' />
							</div>
							<div className={`${isOpen ? 'block' : 'hidden'} cursor-pointer`}>
								<CloseCircle size='30' color={isDark ? iconColorDark : iconColorLight} variant='Outline' />
							</div>
						</div>
					</div>
				</nav>
				<div
					className={`${
						isOpen ? 'h-auto' : 'hidden h-0'
					}  bg-nav-light dark:bg-nav-dark absolute top-[57px] w-full transition-all duration-500`}
				>
					<a href='#about' onClick={() => setIsOpen(false)}>
						<div className='flex cursor-pointer items-center p-2'>
							<User size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
							<span className='pl-[2px] text-[1rem] font-bold text-gray-500 transition-all duration-500 dark:text-[#b2becd]'>
								ABOUT
							</span>
						</div>
					</a>
					<a href='#skills' onClick={() => setIsOpen(false)}>
						<div className='flex cursor-pointer items-center p-2'>
							<Teacher size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
							<span className='pl-[2px] text-[1rem] font-bold text-gray-500 transition-all duration-500 dark:text-[#b2becd]'>
								SKILLS
							</span>
						</div>
					</a>
					<a href='#projects' onClick={() => setIsOpen(false)}>
						<div className='flex cursor-pointer  items-center p-2'>
							<Code size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
							<span className='pl-[2px] text-[1rem] font-bold text-gray-500 transition-all duration-500 dark:text-[#b2becd]'>
								PROJECT
							</span>
						</div>
					</a>
					<a
						href='https://drive.google.com/file/d/1TChEHQtNv8Qv7B_Yj2plT95Zna0Li5RF/view?usp=sharing'
						target='_blank'
						rel='noreferrer'
					>
						<div className='flex cursor-pointer  items-center p-2'>
							<DocumentDownload size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
							<span className='pl-[2px] text-[1rem] font-bold text-gray-500 transition-all duration-500 dark:text-[#b2becd]'>
								RESUME
							</span>
						</div>
					</a>
				</div>
			</section>
		</div>
	);
};

export default Navbar;
