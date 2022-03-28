import { ChakraProvider as CP, extendTheme } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const theme = extendTheme({
  breakpoints: {
    sm: "36em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
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
});

type Props = {
  children: ReactNode;
};

function ChakraProvider({ children }: Props): JSX.Element {
  return <CP theme={theme}>{children}</CP>;
}
export { theme };
export default ChakraProvider;
