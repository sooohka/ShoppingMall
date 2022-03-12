import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function NotFound({ children }: Props): JSX.Element {
  return <h1>Page not found</h1>;
}

export default NotFound;
