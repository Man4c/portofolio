/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070B14",
        panel: "#0C1322",
        tide: "#66E4D5",
        sunset: "#FF8A5B",
        mist: "#98A6BB",
      },
      fontFamily: {
        display: ["Space Grotesk", "Arial", "sans-serif"],
        body: ["Manrope", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
