/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    fontSize: {
      "12px": "12px",
      "14px": "14px",
      "20px": "20px",
      "32px": "32px",
      "36px": "36px",
      "40px": "40px",
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      secondaryTextColor: "#3F454D",
      textSecondary: "#3F454D",

      white: "#FFFFFF",
      mainBorder: "#2F333B",
      mainBG: "#1D2129",
      secondaryColor: "#66FFE3",
      inputBG: "#191D25",
      mainColorAccent: "#0E7DFF",
      secondaryColorAccent: "#1D2129",
      errorColor: "#FF5B5B",
      successColor: "#4ECB71",
      infoColor: "#85B6FF",
      warningColor: "#FFD233",
      activeColor: "#4a4d54",
      secondaryActiveColor: "#4a4d54",
    },
    boxShadow: {
      buttonRegister: "0px 8px 0px 0px #49B09D;",
      buttonLogin: "0px 8px 0px 0px #0C58B0;",
    },
  },
  plugins: [],
};
