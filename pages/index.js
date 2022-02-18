import { useState } from "react/cjs/react.development";
// components
import Navbar from "../components/NavBar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Footer from "../components/Footer";
export default function Home() {
	const [isDark, setIsDark] = useState(true);
	return (
		<div>
			<div className={`${isDark && "dark"}`}>
				<Navbar isDark={isDark} setIsDark={setIsDark} />
				<Main isDark={isDark} />
				<About isDark={isDark} />
				<Skills isDark={isDark} />
				<Projects isDark={isDark} />
				<Footer isDark={isDark} />
			</div>
		</div>
	);
}
