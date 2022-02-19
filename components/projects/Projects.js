import React from "react";
import { Code } from "iconsax-react";
import MovieDB from "../../public/img/MovieDB.png";
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
		<section className='bg-background-light dark:bg-background-dark  scroll-mt-[4rem] px-5 py-10 transition-colors duration-300 lg:px-[100px]' id='projects'>
			<div className='mx-auto flex  max-w-6xl cursor-pointer items-center '>
				<Code size='27' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
				<span className='text-text-bold self-end pl-[2px] text-[1.5rem] font-bold transition-all duration-500 dark:text-[#fff]'>PROJECTS</span>
			</div>
			<div className='mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2'>
				{projects.map((project) => {
					return <ProjectComp isDark={isDark} project={project} key={project.id} />;
				})}
			</div>
		</section>
	);
};

export default Projects;
