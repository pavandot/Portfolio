import { useState } from 'react';
// components
import Navbar from '../components/NavBar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Footer from '../components/Footer';
import Head from 'next/head';
export default function Home() {
	const [isDark, setIsDark] = useState(true);
	return (
		<>
			<Head>
				<title>Pavan</title>
			</Head>
			<div className={`${isDark && 'dark'}`}>
				<Navbar isDark={isDark} setIsDark={setIsDark} />
				<Main isDark={isDark} />
				{/* <About isDark={isDark} /> */}
				<Skills isDark={isDark} />
				<Projects isDark={isDark} />
				<Footer isDark={isDark} />
			</div>
		</>
	);
}
