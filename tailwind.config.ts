import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ra2-red': '#e51c23',
        'ra2-dark': '#1a1a1a',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to bottom, #2d3748, #f7fafc)',
      },
      animation: {
        'spin': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config; 