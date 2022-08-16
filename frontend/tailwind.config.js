/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				hut_img: "url(img/hut.png)",
			},
			colors: {
				section1bgcolor: "#001d3d",
				section2bgcolor1: "#003566",
				section2bgcolor2: "#e0e0fd",
				cardbgcolor2: "#0d1b2a",
				footerbgcolor: " #001d3d",
				highlight: "#fbaf00",
				highlight_dark: "#ff7b00",
				textcolor1: "#fffae5",
				textcolor2: "#94d2bd",
				headingcolor: "#fbaf00",
				pcolor: "#f300b6",
				input_bg: "#fff"
			},
		},
	},
	plugins: [],
};
