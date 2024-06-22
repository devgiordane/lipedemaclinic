/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          50: "#0a4049",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["cupcake"],
  },
};
