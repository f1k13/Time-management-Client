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
      secondaryTextColor: "#3F454D",
      white: "#FFFFFF",
      mainBorder: "#2F333B",
      mainBG: "#1D2129",
      secondaryColor: "#66FFE3",
      inputBG: "#191D25",
      mainColor: "#0E7DFF",
      authBG: "#1D2129",
      errorColor: "#FF5B5B",
    },
    boxShadow: {
      buttonRegister: "0px 8px 0px 0px #49B09D;",
      buttonLogin: "0px 8px 0px 0px #0C58B0;",
    },
  },
  plugins: [],
};
