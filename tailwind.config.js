const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{html,ts,tsx}", "./components/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      gray: colors.gray,
      orange: "#ff7800",
      white: colors.white,
      yellow: "#f6e100",
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
