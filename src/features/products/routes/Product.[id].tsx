import Product from "@Src/features/products/components/Product";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function ProductPage({}: Props) {
  return <Product />;
}

export default ProductPage;
