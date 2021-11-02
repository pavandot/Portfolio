import React from "react";

const ProjectComp = ({ isDark, project }) => {
	const { title, img, description, demo, source } = project;
	return (
		<div className=' bg-nav-light dark:bg-nav-dark p-[15px] rounded-md'>
			<div>
				<img src={img} alt='MovieDb' />
			</div>
			<div>
				<h1 className='text-text-bold dark:text-[#fff] text-xl font-bold text-center py-3'>{title}</h1>
				<p className={`${isDark ? "text-text-dark" : "text-text-light"} text-lg pt-2 font-medium  text-center`}>{description}</p>
				<div className='mt-5 mb-5 space-x-3 flex justify-center w-full'>
					<a
						href={demo}
						target='_blank'
						rel='noreferrer'
						className=' text-text-light dark:text-text-dark font-semibold px-[20px] py-[7px] border-[2px] rounded border-[#fa8142] hover:bg-[#fa8142] transition-colors duration-300 hover:text-[#fff] dark:hover:text-[#fff]'>
						Live Demo
					</a>
					<a
						href={source}
						target='_blank'
						rel='noreferrer'
						className=' text-text-light dark:text-text-dark font-semibold px-[20px] py-[7px] border-[2px] rounded border-[#09c372] hover:bg-[#09c372] transition-colors duration-300 hover:text-[#fff] dark:hover:text-[#fff]'>
						View Source
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectComp;
