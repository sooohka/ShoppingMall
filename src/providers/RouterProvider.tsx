import * as React from "react";
import { BrowserRouter } from "react-router-dom";

type Props = { children: React.ReactNode };

function RouterProvider({ children }: Props): JSX.Element {
  return <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>{children}</BrowserRouter>;
}

export default RouterProvider;
