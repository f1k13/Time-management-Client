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
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    colors: {
      secondaryTextColor: "#3F454D",
      white: "#FFFFFF",
      mainBorder: "#2F333B",
      mainBG: "#1D2129",
      secondaryColor: "#66FFE3",
      inputBG: "#191D25",
      mainColorAcsent: "#0E7DFF",
      secondaryColorAcsent: "#1D2129",
      errorColor: "#FF5B5B",
    },
    boxShadow: {
      buttonRegister: "0px 8px 0px 0px #49B09D;",
      buttonLogin: "0px 8px 0px 0px #0C58B0;",
    },
  },
  plugins: [],
};
