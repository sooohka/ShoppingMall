import React, { ReactNode } from "react";
import { ChakraProvider as CP } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

function ChakraProvider({ children }: Props): JSX.Element {
  return <CP>{children}</CP>;
}

export default ChakraProvider;
