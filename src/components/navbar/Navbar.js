import React, { useState } from "react";
import { User, Code, DocumentText1, Moon, Sun1, TextalignJustifycenter, CloseCircle, SecurityUser, Teacher } from "iconsax-react";
import logo from "../../img/logo.svg";
import { ReactSVG } from "react-svg";
const Navbar = ({ isDark, setIsDark }) => {
	const [isOpen, setIsOpen] = useState(false);
	const iconColorLight = "#3F3D56";
	const iconColorDark = "#d0cde1";
	return (
		<div className='fixed w-full'>
			<section className=' bg-nav-light dark:bg-nav-dark transition-colors duration-300 h-[58px] sm:h-auto flex sm:block items-center flex-col'>
				<nav className=' flex justify-between items-center sm:py-4 sm:px-6 w-full px-3 h-[4rem]'>
					<div>
						<ReactSVG src={logo} className='w-[48px]' />
					</div>
					<ul className='justify-around w-[70%] md:w-[50%] items-center hidden sm:flex'>
						<a href='#about'>
							<li className='flex items-center cursor-pointer '>
								<SecurityUser size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
								{/* <User size='19.2' color={` ${isDark ? "#b2becd" : "#454e56"} `} variant='Bulk'  /> */}
								<span className='font-bold text-[1.2rem] self-end text-gray-500 dark:text-[#b2becd] pl-[2px] transition-all duration-500'>ABOUT</span>
							</li>
						</a>
						<a href='#skills'>
							<li className='flex items-center cursor-pointer '>
								<Teacher size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
								{/* <User size='19.2' color={` ${isDark ? "#b2becd" : "#454e56"} `} variant='Bulk'  /> */}
								<span className='font-bold text-[1.2rem] self-end text-gray-500 dark:text-[#b2becd] pl-[2px] transition-all duration-500'>SKILLS</span>
							</li>
						</a>
						<li className='flex items-center  cursor-pointer '>
							<Code size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
							<span className='font-bold text-[1.2rem] text-gray-500 dark:text-[#b2becd] pl-[2px] transition-all duration-500'>PROJECT</span>
						</li>
						<li className='flex items-center  cursor-pointer '>
							<DocumentText1 size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
							<span className='font-bold text-[1.2rem] text-gray-500 dark:text-[#b2becd] pl-[2px] transition-all duration-500'>RESUME</span>
						</li>
						<li onClick={() => setIsDark(!isDark)} className='transition-all duration-300'>
							<div className={`${!isDark ? "block" : "hidden"}  cursor-pointer`}>
								<Moon size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bold' />
							</div>
							<div className={`${isDark ? "block" : "hidden"} cursor-pointer`}>
								<Sun1 size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bold' />
							</div>
						</li>
					</ul>
					<div className='sm:hidden flex'>
						<div onClick={() => setIsDark(!isDark)} className='transition-all duration-300 pr-5'>
							<div className={`${!isDark ? "block" : "hidden"}  cursor-pointer`}>
								<Moon size='30' color={isDark ? iconColorDark : iconColorLight} variant='Bold' />
							</div>
							<div className={`${isDark ? "block" : "hidden"} cursor-pointer`}>
								<Sun1 size='30' color={isDark ? iconColorDark : iconColorLight} variant='Bold' />
							</div>
						</div>
						<div onClick={() => setIsOpen(!isOpen)} className='transition-all duration-300'>
							<div className={`${!isOpen ? "block" : "hidden"}  cursor-pointer`}>
								<TextalignJustifycenter size='30' color={isDark ? iconColorDark : iconColorLight} variant='Outline' />
							</div>
							<div className={`${isOpen ? "block" : "hidden"} cursor-pointer`}>
								<CloseCircle size='30' color={isDark ? iconColorDark : iconColorLight} variant='Outline' />
							</div>
						</div>
					</div>
				</nav>
				<div className={`${isOpen ? "h-auto" : "hidden h-0"}  transition-all duration-500 bg-nav-light dark:bg-nav-dark w-full absolute top-[57px]`}>
					<a href='#about' onClick={() => setIsOpen(false)}>
						<div className='flex items-center cursor-pointer p-2'>
							<User size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
							{/* <User size='19.2' color={` ${isDark ? "#b2becd" : "#454e56"} `} variant='Bulk'  /> */}
							<span className='font-bold text-[1rem] text-gray-500 dark:text-[#b2becd] pl-[2px] transition-all duration-500'>ABOUT</span>
						</div>
					</a>
					<div className='flex items-center  cursor-pointer p-2'>
						<Code size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
						<span className='font-bold text-[1rem] text-gray-500 dark:text-[#b2becd] pl-[2px] transition-all duration-500'>PROJECT</span>
					</div>
					<div className='flex items-center  cursor-pointer p-2'>
						<DocumentText1 size='25' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
						<span className='font-bold text-[1rem] text-gray-500 dark:text-[#b2becd] pl-[2px] transition-all duration-500'>RESUME</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Navbar;
