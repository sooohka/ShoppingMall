import React, { ReactNode, useEffect, useState } from "react";
import ProductListItem from "@Domains/products/components/ProductListItem";
import config from "@Config/index";
import ProductList from "@Domains/products/components/ProductList";

type Props = {
  children?: ReactNode;
};

function Products({}: Props): JSX.Element {
  return (
    <div>
      <ProductList />
    </div>
  );
}

export default Products;
