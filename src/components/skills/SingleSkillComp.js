import React from "react";

const SingleSkillComp = ({ isDark, skill }) => {
	const { title, img, icon } = skill;

	return (
		<div className='bg-nav-light dark:bg-nav-dark flex  flex-col justify-between rounded-md p-2 shadow-lg transition-colors duration-300'>
			<div className='flex-grow self-center '>
				{/* <img src={img} alt='javascript' className='w-full h-full ' /> */}
				<i className={`${icon} colored  text-[5.5rem]`}></i>
			</div>
			<div className=''>
				<h1 className='text-text-bold text-center text-xl font-bold dark:text-[#fff] '>{title}</h1>
				{/* <p className={`${isDark ? "text-text-dark" : "text-text-light"} text-lg pt-2 font-medium hidden sm:block `}>{description}</p> */}
			</div>
		</div>
	);
};

export default SingleSkillComp;
