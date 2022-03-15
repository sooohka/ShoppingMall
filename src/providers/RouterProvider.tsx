import * as React from "react";
import { BrowserRouter } from "react-router-dom";

type Props = { children: React.ReactNode };

function RouterProvider({ children }: Props): JSX.Element {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default RouterProvider;
