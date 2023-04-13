/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        black: {
          new: "#111111"
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(text|fill|bg)-(zinc|sky|green|red|yellow)-(200|400|900)/,
      variants: ["group-hover/on", "group-hover/off", "group-active/on", "group-active/off"],
    },
  ],
};
