import React, { ReactNode } from "react";
import RouterProvider from "./RouterProvider";
import ChakraProvider from "./ChakraProvider";

type Props = { children: ReactNode };
function AppProvider({ children }: Props) {
  return (
    <ChakraProvider>
      <RouterProvider>{children}</RouterProvider>
    </ChakraProvider>
  );
}

export default AppProvider;
