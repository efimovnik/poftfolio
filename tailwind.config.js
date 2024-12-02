/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";

export default {
  content: ["index.html"],
  theme: {
    extend: {},
  },
  plugins: [
  plugin(
    function ({ addVariant }) {
      addVariant("glow", ".glow-capture .glow-overlay &")
    },
    {
      theme: {
        extend: {
          colors: {
            // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
            glow: "color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)",
          },
        },
      },
    }
  ),
],
}
