import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
		colors: {
  		"first-color": "#27323a",
  		"second-color": "#435055",
  		"third-color": "#29a19c",
  		"fourth-color": "#a3f7bf",
  		"fifth-color": "#F3F3F3"
		  }
		}
	},
	plugins: [addVariablesForColors]
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}
