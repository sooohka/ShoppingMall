import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function Landing({ children }: Props): JSX.Element {
  return <h1>Landing Page 입니다.</h1>;
}

export default Landing;
