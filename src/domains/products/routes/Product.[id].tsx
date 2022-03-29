import Product from "@Domains/products/components/Product";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function ProductPage({}: Props): JSX.Element {
  return <Product />;
}

export default ProductPage;
