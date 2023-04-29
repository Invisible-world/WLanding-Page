/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	darkMode: "class",
	theme: {
		extend: {
			lg: "1024",
			md: "786",
			sm: "480",
		},
	},
	plugins: [],
};

