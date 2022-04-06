import React from "react";
import ProductList from "@Domains/products/components/ProductList";
import CategoryMenu from "@Domains/categories/components/CategoryMenu";
import { VStack } from "@chakra-ui/react";

type Props = {};

function Products({}: Props): JSX.Element {
  return (
    <VStack maxH="90vh" overflow="auto" w="100%" p="2rem" gap="1rem" alignItems="flex-start">
      <CategoryMenu />
      <ProductList />
    </VStack>
  );
}

export default Products;
