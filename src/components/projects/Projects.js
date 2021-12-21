import React from "react";
import { Code } from "iconsax-react";
import MovieDB from "../../img/MovieDB.png";
import ProjectComp from "./ProjectComp";

const Projects = ({ isDark }) => {
	const iconColorLight = "#12181b";
	const iconColorDark = "#fff";
	const projects = [
		{
			id: 1,
			title: "MovieDB",
			img: MovieDB,
			description: "MovieDB is web application to discover new movies and tv shows and to maintain your favorites and watch list. ",
			demo: "https://pavan-movie-db.vercel.app/",
			source: "https://github.com/pavandot/MovieDB",
		},
	];
	return (
		<section className='bg-background-light dark:bg-background-dark  transition-colors duration-300 md:px-[100px] px-5 py-10' id='projects'>
			<div className='flex items-center  cursor-pointer max-w-6xl mx-auto '>
				<Code size='27' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
				<span className='font-bold text-[1.5rem] self-end text-text-bold dark:text-[#fff] pl-[2px] transition-all duration-500'>PROJECTS</span>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 max-w-6xl mx-auto'>
				{projects.map((project) => {
					return <ProjectComp isDark={isDark} project={project} key={project.id} />;
				})}
			</div>
		</section>
	);
};

export default Projects;
