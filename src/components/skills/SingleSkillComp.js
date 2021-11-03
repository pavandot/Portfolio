import React from "react";

const SingleSkillComp = ({ isDark, skill }) => {
	const { title, img } = skill;
	return (
		<div className='flex justify-between flex-col  bg-nav-light dark:bg-nav-dark transition-colors duration-300 p-2 rounded-md shadow-lg'>
			<div className='sm:w-[30%] self-center flex-grow '>
				<img src={img} alt='javascript' className='w-full h-full ' />
			</div>
			<div className=''>
				<h1 className='text-text-bold dark:text-[#fff] text-xl font-bold text-center '>{title}</h1>
				{/* <p className={`${isDark ? "text-text-dark" : "text-text-light"} text-lg pt-2 font-medium hidden sm:block `}>{description}</p> */}
			</div>
		</div>
	);
};

export default SingleSkillComp;
