/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const typographyThemes = (theme) => ({
  n: {
    css: {
      maxWidth: "none",
      paddingBottom: theme("spacing.24"),

      "*": {
        marginTop: 0,
        marginBottom: 0,
      },

      color: theme("colors.light/50"),

      pre: {
        backgroundColor: theme("colors.dark"),
      },

      "h1, h2, h3, h4, h5, h6": {
        fontWeight: theme("fontWeight.semibold"),
        marginTop: theme("spacing.4"),
      },

      h1: {
        fontSize: theme("fontSize.2xl"),
      },

      h2: {
        fontSize: theme("fontSize.xl"),
      },

      h3: {
        fontSize: theme("fontSize.lg"),
      },

      "h4, h4, h5": {
        fontSize: theme("fontSize.base"),
      },

      a: {
        color: theme("colors.light"),
        fontWeight: theme("fontWeight.medium"),
        textDecoration: "underline",
      },

      "--tw-prose-body": theme("colors.light"),
      "--tw-prose-headings": theme("colors.light"),
      "--tw-prose-code": theme("colors.light"),

      ":not(pre) > code": {
        backgroundColor: theme("colors.dark"),
        padding: "0.2em 0.4em",
        borderRadius: theme("borderRadius.md"),
        "&::before, &::after": {
          content: "none",
        },
      },
    },
  },
});

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    /** ==== overrides === */
    colors: {
      dark: "hsl(255, 25%, 11%)",
      light: "hsl(255, 25%, 90%)",
      hint: "hsl(255, 25%, 55%)",
      yellow: "#E5B73E",
      pink: "#EB5673",
      purple: "#A280E8",
      black: "#000000",
      transparent: "transparent",
    },
    letterSpacing: {
      tightest: "-.06em",
      tighter: "-.04em",
      tight: "-.02em",
      "semi-tight": "-.01em",
      normal: "0",
      "semi-wide": ".01em",
      wide: ".02em",
      wider: ".04em",
      widest: ".06em",
    },
    /** ==== end of override === */
    extend: {
      fontFamily: {
        sans: ["var(--archivo-font)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        light: "0 1px 6px rgb(0 0 0 / 4%)",
      },
      gridTemplateColumns: {
        "fill-3": "repeat(auto-fill, minmax(396px, 3fr))",
      },
      typography: typographyThemes,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
