import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "36rem",
    md: "48rem",
    lg: "62rem",
    xl: "80rem",
    "2xl": "96rem",
  },
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    header: 1025,
    sidebar: 1050,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  layout: {
    sidebar: {
      width: "15rem",
    },
    header: {
      height: "5rem",
    },
  },
});

export default theme;
