import React from "react";
import Image from "next/image";
import LightHero from "../public/img/Light-Hero.svg";
import DarkHero from "../public/img/Dark-Hero.svg";
import TypeIt from "typeit-react";
const Main = ({ isDark }) => {
	return (
		<section className=' bg-background-light dark:bg-background-dark flex min-h-screen w-full items-center transition-colors duration-300' id='home'>
			<div className=' bg-background-light  dark:bg-background-dark   mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-around px-5 pt-[100px] transition-colors duration-300 sm:justify-between md:flex-row lg:px-[100px] '>
				<div className='   md:w-[55%] '>
					<h1 className={`${isDark ? "text-white" : "text-text-bold"} text-[1.5rem]  font-bold sm:text-[2rem]`}>👋 My name is</h1>
					<h1 className={` text-[2.5rem] font-bold sm:text-[3.5rem] ${isDark ? "text-white" : "text-text-bold"}`}>
						<span> Pavan</span> <span className='bg-gradient-to-r from-[#FA8142] to-[#FF4088] bg-clip-text text-transparent'> Kumar </span>{" "}
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
						className={`${isDark ? "text-white" : "text-text-bold"} text-[1.8rem] font-bold sm:text-[2rem]`}
					/>
					<div>
						<h1 className={`${isDark ? "text-text-dark" : "text-text-light"} mt-5 text-2xl font-medium`}>
							Hi! I am a<span className='mx-[5px] rounded bg-gradient-to-r from-[#FA8142] to-[#FF4088] p-[1px] text-white sm:p-[2px]'> web developer </span> focused on crafting great web experiences. I enjoy creating beautifully designed, intuitive and
							functional websites.
						</h1>
					</div>
				</div>

				<div className='text-background-light dark:text-background-dark '>
					<Image src={`${isDark ? "https://pavandot.netlify.app/static/media/Light-Hero.ab1d1f10.svg" : "https://pavandot.netlify.app/static/media/Dark-Hero.27aa77ec.svg"}`} alt='img' width='350' height='350' />
				</div>
			</div>
		</section>
	);
};

export default Main;
