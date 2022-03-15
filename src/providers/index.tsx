import React, { ReactNode } from "react";
import RouterProvider from "./RouterProvider";
import QueryClientProvider from "./QueryClientProvider";
import ChakraProvider from "./ChakraProvider";

type Props = { children: ReactNode };
function AppProvider({ children }: Props) {
  return (
    <ChakraProvider>
      <QueryClientProvider>
        <RouterProvider>{children}</RouterProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default AppProvider;
