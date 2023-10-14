/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
      },
      colors: {
        fill: {
          DEFAULT: "#FCF5E5",
          dark: "#212737",
        },
        text: {
          DEFAULT: "#282728",
          dark: "#eaedf3",
        },
        accent: {
          DEFAULT: "#49453E",
          dark: "#ff6b01",
        },
        card: {
          DEFAULT: "#e6e6e6",
          dark: "#343f60",
        },
        muted: {
          DEFAULT: "#C0A989",
          dark: "#babdc2",
        },
        border: {
          DEFAULT: "#ECE9E9",
          dark: "#AB4B08",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
