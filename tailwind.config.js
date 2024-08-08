/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        344: "21.5rem",
      },
      width: {
        275: "17.188rem",
      },
      maxWidth: {
        564: "35.25rem",
      },
      colors: {
        black: {
          1: "#121212",
          2: "#1E1E1E",
          3: "rgba(0, 0, 0, 0.5)",
          4: "rgba(0, 0, 0, 0.2)",
        },
      }
    },
  },
  plugins: [],
};
