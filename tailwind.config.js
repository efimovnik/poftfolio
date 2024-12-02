/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";

export default {
  content: ["index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    plugin(function ({ addVariant }) {
      addVariant("glow", ".glow-capture .glow-overlay &");
    }),
  ],
};
