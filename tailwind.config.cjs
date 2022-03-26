const colors = require('tailwindcss/colors')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
      colors: {
        primary: colors.blue
      }
    },
    container: {
      center: true,
      padding: '2rem'
    }
	},

	plugins: [require('@tailwindcss/line-clamp')]
};

module.exports = config;
