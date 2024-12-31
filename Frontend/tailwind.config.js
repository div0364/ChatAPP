/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include your source files
  ],
  theme: {
    extend: {}, // Extend the default Tailwind theme if needed
  },
  plugins: [require("daisyui")], // Include the DaisyUI plugin
};
