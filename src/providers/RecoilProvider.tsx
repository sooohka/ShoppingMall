import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

type Props = {
  children: ReactNode;
};

function RecoilProvider({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilProvider;
