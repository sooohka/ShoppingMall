import React from "react";
import ProductList from "@Domains/products/components/ProductList";
import CategoryMenu from "@Domains/categories/components/CategoryMenu";
import { VStack } from "@chakra-ui/react";

type Props = {};

function Products({}: Props): JSX.Element {
  return (
    <VStack w="100%" minW="55rem" p="2rem" gap="1rem" alignItems="flex-start">
      <CategoryMenu />
      <ProductList />
    </VStack>
  );
}

export default Products;
