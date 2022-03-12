import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ProductListItem({ children }: Props): JSX.Element {
  return <li />;
}

export default ProductListItem;
