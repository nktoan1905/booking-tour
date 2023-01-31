/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				login_background: "url('/client/public/assets/images/login_background.jpg')",
			},
		},
	},
	plugins: [],
};
