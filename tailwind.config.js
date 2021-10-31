module.exports = {
	mode: "jit",
	purge: ["./public/*.html", "./src/*.js", "./src/*/*/*.js"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"background-dark": "#12181B",
				"background-light": "#DBE1E8",
				"nav-dark": "#2A2E35",
				"nav-light": "#FFFFFF",
				"text-bold": "#12181b",
				"text-light": "#454e56",
				"text-dark": "#b2becd",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
