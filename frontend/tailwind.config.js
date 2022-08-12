/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				hut_img: "url(img/hut.png)",
			},
		},
	},
	plugins: [],
};
