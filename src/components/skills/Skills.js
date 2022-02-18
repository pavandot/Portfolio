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
			// img: "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
			icon: "devicon-javascript-plain",
			description: "an object-oriented computer programming language commonly used to create interactive effects within web browsers.",
		},
		{
			id: 2,
			title: "ReactJs",
			// img: "https://iconape.com/wp-content/files/tx/353401/png/react-logo.png",
			icon: "devicon-react-original",
			description: "React is a free and open-source front-end JavaScript library for building user interfaces or UI components.",
		},
		{
			id: 3,
			title: "Redux",
			// img: "https://iconape.com/wp-content/files/te/353276/png/redux-logo.png",
			icon: "devicon-redux-original",
			description: "Redux is an open-source JavaScript library for managing and centralizing application state.",
		},
		{
			id: 4,
			title: "tailwindcss",
			// img: "https://iconape.com/wp-content/files/pq/371539/svg/371539.svg",
			icon: "devicon-tailwindcss-plain",
			description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces",
		},
		{
			id: 5,
			title: "Git",
			// img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
			icon: "devicon-git-plain",
			description: "Git is a free and open source distributed version control system .",
		},
		{
			id: 6,
			title: "Next.js",
			// img: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
			icon: "devicon-nextjs-original",
		},
		{
			id: 7,
			title: "TypeScript",
			// img: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
			icon: "devicon-typescript-plain",
		},
	];
	return (
		<section className='bg-background-light dark:bg-background-dark  scroll-mt-[4rem] px-5 py-10 transition-colors duration-300 lg:px-[100px]' id='skills'>
			<div className='mx-auto flex max-w-6xl cursor-pointer items-center '>
				<Teacher size='27' color={isDark ? iconColorDark : iconColorLight} variant='Bulk' />
				<span className='text-text-bold self-end pl-[2px] text-[1.5rem] font-bold transition-all duration-500 dark:text-[#fff]'>SKILLS</span>
			</div>
			<div className='mx-auto grid max-w-6xl grid-cols-2 gap-2 pt-10 sm:grid-cols-4 sm:gap-5'>
				{skills.map((skill) => {
					return <SingleSkillComp isDark={isDark} skill={skill} key={skill.id} />;
				})}
			</div>
		</section>
	);
};

export default Skills;
