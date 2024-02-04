/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        nutmeg: "#8c6d4f",
        eggshell: "#f4e6d9",
        "dark-raspberry": "#8c6d4f",
        "rose-white": "#fdf7f9",
        "rose": "#952853",
        "light-grey": "#e0e5e9",
        "wenge-brown": "#635541",
        "dark-charcoal": "#2c2d31",
      },

      borderRadius: {
        24: "24px",
        16: "16px",
      },
    },
    fontFamily: {
      Outfit: ["Outfit"],
      YoungSerif: ["YoungSerif"],
    },
  },
  plugins: [],
};
