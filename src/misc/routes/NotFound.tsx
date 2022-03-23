import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function NotFound({}: Props): JSX.Element {
  return <h1>Page not found</h1>;
}

export default NotFound;
