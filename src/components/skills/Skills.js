import React from "react";
import { Teacher } from "iconsax-react";
import SingleSkillComp from "./SingleSkillComp";
const Skills = ({ isDark }) => {
	const iconColorLight = "#12181b";
	const iconColorDark = "#fff";
	const skills = [
		{
			id: 1,
			title: "Javascript",
			img: "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
			description: "an object-oriented computer programming language commonly used to create interactive effects within web browsers.",
		},
		{
			id: 2,
			title: "ReactJs",
			img: "https://iconape.com/wp-content/files/tx/353401/png/react-logo.png",
			description: "React is a free and open-source front-end JavaScript library for building user interfaces or UI components.",
		},
		{
			id: 3,
			title: "Redux",
			img: "https://iconape.com/wp-content/files/te/353276/png/redux-logo.png",
			description: "Redux is an open-source JavaScript library for managing and centralizing application state.",
		},
		{
			id: 4,
			title: "tailwindcss",
			img: "https://iconape.com/wp-content/files/pq/371539/svg/371539.svg",
			description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces",
		},
		{
			id: 5,
			title: "Git",
			img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
			description: "Git is a free and open source distributed version control system .",
		},
	];
	return (
		<section className='bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-300 md:px-[100px] px-5 py-10' id='skills'>
			<div className='flex items-center cursor-pointer '>
				<Teacher size='27' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
				<span className='font-bold text-[1.5rem] self-end text-text-bold dark:text-[#fff] pl-[2px] transition-all duration-500'>SKILLS</span>
			</div>
			<div className='pt-10 grid grid-cols-2 gap-2 sm:gap-5'>
				{skills.map((skill) => {
					return <SingleSkillComp isDark={isDark} skill={skill} key={skill.id} />;
				})}
			</div>
		</section>
	);
};

export default Skills;
