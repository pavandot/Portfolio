import { useState } from "react";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
function App() {
	const [isDark, setIsDark] = useState(false);
	return (
		<div className={`${isDark && "dark"}`}>
			<Navbar isDark={isDark} setIsDark={setIsDark} />
			<Main isDark={isDark} />
			<About isDark={isDark} />
			{/* <div className='bg-[#D7DAE0] h-screen dark:bg-background-dark transition-colors duration-300'>
				<h1 className=' text-gray-800 dark:text-gray-200'>hello</h1>
				<button onClick={() => setIsDark(!isDark)}>Toggle</button>
			</div> */}
		</div>
	);
}

export default App;
