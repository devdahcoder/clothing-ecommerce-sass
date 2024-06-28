import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
		  backgroundImage: {
			  "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			  "gradient-conic":
				  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
		  },
		  colors: {
			  neutral: {
				  black: {
					  100: '#E6E7E8',
					  200: '#B6B7BC',
					  300: '#878A92',
					  400: '#71747E',
					  500: '#5C5F6A',
					  600: '#474B57',
					  700: '#333845',
					  800: '#202533',
					  900: '#0E1422',
				  },
				  white: {
					  100: "#F6F6F6",
					  200: "#E9E9EB",
					  900: "#FFFFFF",
				  }
			  },
		  },
		  screens: {
			  // For each break point i tend to try and trigger at least three example: xs, xg, xx.
			  // Same with sm, sg, sx
			  xs: { min: "320px" },
			  sm: {
				  min: "480px",
			  },
			  sg: {
				  min: "559px",
			  },
			  mx: {
				  min: "639px",
			  },
			  md: {
				  min: "768px",
			  },
			  ls: {
				  min: "840px",
			  },
			  lg: {
				  min: "1024px",
			  },
			  xl: {
				  min: "1280px",
			  },
			  "2xl": {
				  min: "1920px",
			  },
		  },
    },
  },
  plugins: [],
};
export default config;
