import React, { ReactNode } from "react";
import RecoilProvider from "@Src/providers/RecoilProvider";
import RouterProvider from "./RouterProvider";
import ChakraProvider from "./ChakraProvider";

type Props = { children: ReactNode };
function AppProvider({ children }: Props) {
  return (
    <ChakraProvider>
      <RouterProvider>
        <RecoilProvider>{children}</RecoilProvider>
      </RouterProvider>
    </ChakraProvider>
  );
}

export default AppProvider;
