/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/app.vue",
  ],
  theme: {
    colors: {
      black: "#000000",
      accent: "#A18A68",
      white: "#FFFFFF",
      "dark-gray": "#707070",
      "light-gray": "#D8D8D8",
    },

    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      width: {
        xs: "20rem", // 320px
        sm: "24rem", // 384px
        md: "28rem", // 448px
        lg: "32rem", // 512px
        xl: "36rem", // 576px
        "2xl": "42rem", // 672px
        "3xl": "48rem", // 768px
      },
    },
  },
  plugins: [],
};
