import { useState } from "react";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
function App() {
	const [isDark, setIsDark] = useState(true);
	return (
		<div className={`${isDark && "dark"}`}>
			<Navbar isDark={isDark} setIsDark={setIsDark} />
			<Main isDark={isDark} />
			<About isDark={isDark} />
			<Skills isDark={isDark} />
			<Projects isDark={isDark} />
			<Footer isDark={isDark} />
		</div>
	);
}

export default App;
