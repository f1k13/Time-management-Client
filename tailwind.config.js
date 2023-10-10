/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    fontSize: {
      "14px": "14px",
      "40px": "40px",
      "36px": "36px",
    },
    colors: {
      titleSideBar: "#3F454D",
      white: "#FFFFFF",
      mainBorder: "#2F333B",
      mainBG: "#1D2129",
      labelColor: "#66FFE3",
      inputBG: "#191D25",
      
    },
    boxShadow: {
      buttonRegister: "0px 8px 0px 0px #49B09D;",
    },
  },
  plugins: [],
};
