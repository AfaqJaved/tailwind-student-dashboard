/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1279px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "971px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "700px" },
			// => @media (max-width: 639px) { ... }
		},
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};