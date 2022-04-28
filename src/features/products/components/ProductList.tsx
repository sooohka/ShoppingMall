import { Wrap } from "@chakra-ui/react";
import ProductListItem from "@Src/features/products/components/ProductListItem";
import SkeletonProductListItem from "@Src/features/products/components/SkeletonProductListItem";
import { filteredProductsState } from "@Src/stores/products";
import React, { ReactNode } from "react";
import { useRecoilValueLoadable } from "recoil";

type Props = {
  children?: ReactNode;
};

function ProductList({}: Props) {
  const products = useRecoilValueLoadable(filteredProductsState);

  if (products.state === "loading" || products.state === "hasError") {
    return (
      <Wrap spacing={0} minW={["", "50rem"]}>
        {new Array(10).fill(0).map((_, i) => (
          <SkeletonProductListItem key={i.toFixed(2)} />
        ))}
      </Wrap>
    );
  }
  return (
    <Wrap spacing={0} minW={["", "50rem"]}>
      {products.contents.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </Wrap>
  );
}

export default ProductList;
