import React from "react";
import TypeIt from "typeit-react";
const Main = ({ isDark }) => {
	return (
		<section className=' bg-background-light dark:bg-background-dark min-h-screen w-full flex items-center transition-colors duration-300'>
			<div className=' bg-background-light  dark:bg-background-dark   transition-colors duration-300 flex pt-[100px] sm:px-[100px] px-5 w-full justify-around items-center sm:justify-between flex-col-reverse md:flex-row max-w-7xl mx-auto '>
				<div className='   md:w-[55%] '>
					<h1 className={`${isDark ? "text-white" : "text-text-bold"} font-bold  text-[1.5rem] sm:text-[2rem]`}>👋 My name is</h1>
					<h1 className={` text-[2.5rem] sm:text-[3.5rem] font-bold ${isDark ? "text-white" : "text-text-bold"}`}>
						<span> Pavan</span> <span className='bg-gradient-to-r from-[#FA8142] to-[#FF4088] text-transparent bg-clip-text'> Kumar </span>{" "}
					</h1>
					<TypeIt
						getBeforeInit={(instance) => {
							instance.type("Web Developer").pause(750).delete(13).pause(500).type("Programmer ").pause(500);

							return instance;
						}}
						options={{
							waitUntilVisible: true,
							loop: true,
							cursor: false,
						}}
						element={"p"}
						className={`${isDark ? "text-white" : "text-text-bold"} text-[1.8rem] sm:text-[2rem] font-bold`}
					/>
					<div>
						<h1 className={`${isDark ? "text-text-dark" : "text-text-light"} text-2xl font-medium mt-5`}>
							Hi! I am a<span className='bg-gradient-to-r from-[#FA8142] to-[#FF4088] text-white rounded p-[1px] sm:p-[2px] mx-[5px]'> web developer </span> focused on crafting great web experiences. I enjoy creating beautifully designed, intuitive and
							functional websites.
						</h1>
					</div>
				</div>

				<div className='text-background-light dark:text-background-dark '>
					<img src={`${isDark ? "https://pavandot.netlify.app/static/media/Light-Hero.ab1d1f10.svg" : "https://pavandot.netlify.app/static/media/Dark-Hero.27aa77ec.svg"}`} alt='img' width='350' />
				</div>
			</div>
		</section>
	);
};

export default Main;
