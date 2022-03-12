import React, { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import QueryClientProvider from "@Providers/QueryClientProvider";
import RouterProvider from "@Providers/RouterProvider";
import ChakraProvider from "@Providers/ChakraProvider";

type Props = { children: ReactNode };
function AllTheProviders({ children }: Props): JSX.Element {
  return (
    <ChakraProvider>
      <QueryClientProvider>
        <RouterProvider>{children}</RouterProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
