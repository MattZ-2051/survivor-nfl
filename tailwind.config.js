import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
  		boxShadow: {
  					input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`
  		},
  		colors: {
    		"first-color": "#000000",
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
