import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-custom-color-500', // your-custom-css-class
    'text-custom-color-500',
    'border-custom-color-500',
    'hover:bg-custom-color-500', // *** also include it with the selector if needed *** 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
