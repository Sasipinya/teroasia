import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '990px', // กำหนด container ให้กว้าง 990px ที่ breakpoint 'lg'
        xl: '1440px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [ ],
};
export default config;
