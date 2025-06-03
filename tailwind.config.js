/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1525px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      dmsans: ["DM Sans", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
      montserratAlt: ['"Montserrat Alternates"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
