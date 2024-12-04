/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      colors: {
        // Extend your theme with glow color if used
        glow: "color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)",
      },
    },
  },
  plugins: [
    typography, // Include the typography plugin if used
    plugin(
      function ({ addVariant }) {
        addVariant("glow", ".glow-capture .glow-overlay &");
      }
    ),
  ],
};
