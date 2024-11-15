/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   xs: "480px", // Custom small size
    //   sm: "640px", // Default small size
    //   md: "768px", // Default medium size
    //   lg: "1024px", // Default large size
    //   xl: "1280px", // Default extra-large size
    //   "2xl": "1440px", // Custom extra-large size
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
