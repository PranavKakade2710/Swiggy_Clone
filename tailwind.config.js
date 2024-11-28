/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./Components/**/*.{html,js}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
      },
    },
  },
  plugins: [],
};
