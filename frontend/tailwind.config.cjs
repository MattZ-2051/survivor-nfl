/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
	theme: {
		extend: {
			colors: {
				firstColor: '#233142',
				secondColor: '#455d7a',
				thirdColor: '#f95959',
				fourthColor: '#e3e3e3'
			}
		}
	},
	darkMode: 'class',
	plugins: []
};
