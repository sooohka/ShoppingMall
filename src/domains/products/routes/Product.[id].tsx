import ProductDetail from "@Domains/products/components/ProductDetail";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function Product({}: Props): JSX.Element {
  return <ProductDetail />;
}

export default Product;
