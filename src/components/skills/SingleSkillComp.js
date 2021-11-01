import React from "react";

const SingleSkillComp = ({ isDark, skill }) => {
	const { title, img, description } = skill;
	return (
		<div className='flex justify-between sm:justify-start flex-col sm:flex-row md:min-h-[151px] bg-nav-light dark:bg-nav-dark transition-colors duration-300 p-2 rounded-md shadow-md hover:shadow-lg'>
			<div className='sm:w-[30%] self-center flex-grow sm:flex-none'>
				<img src={img} alt='javascript' className='w-full h-full ' />
			</div>
			<div className='sm:w-[70%] sm:pl-3'>
				<h1 className='text-text-bold dark:text-[#fff] text-xl font-bold text-center sm:text-left'>{title}</h1>
				<p className={`${isDark ? "text-text-dark" : "text-text-light"} text-lg pt-2 font-medium hidden sm:block `}>{description}</p>
			</div>
		</div>
	);
};

export default SingleSkillComp;
