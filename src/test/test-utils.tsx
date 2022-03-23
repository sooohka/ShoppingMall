import ChakraProvider from "@Providers/ChakraProvider";
import RouterProvider from "@Providers/RouterProvider";
import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement, ReactNode } from "react";

type Props = { children: ReactNode };
function AllTheProviders({ children }: Props): JSX.Element {
  return (
    <ChakraProvider>
      <RouterProvider>{children}</RouterProvider>
    </ChakraProvider>
  );
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
