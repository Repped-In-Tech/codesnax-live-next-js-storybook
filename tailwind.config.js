/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          300: "#FDF8FF",
          800: "#2F2036",
          900: "#15051C",
        },
        pink: {
          100: "#ED9BFF",
          300: "#EB00FF",
        },
      }
    },
  },
  plugins: [],
};
