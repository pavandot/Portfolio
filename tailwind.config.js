module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'background-dark': '#12181B',
				'background-light': '#DBE1E8',
				'nav-dark': '#2A2E35',
				'nav-light': '#FFFFFF',
				'text-bold': '#12181b',
				'text-light': '#454e56',
				'text-dark': '#b2becd',
			},
		},
	},
	plugins: [],
};
