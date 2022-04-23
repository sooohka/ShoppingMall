import { ChakraProvider as CP } from "@chakra-ui/react";
import theme from "@Src/styles/theme";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ChakraProvider({ children }: Props): JSX.Element {
  return <CP theme={theme}>{children}</CP>;
}

export default ChakraProvider;
