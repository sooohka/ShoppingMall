import React from "react";
import ProductList from "@Domains/products/components/ProductList";
import CategoryTab from "@Domains/categories/components/CategoryTab";
import { VStack } from "@chakra-ui/react";
import MainLayout from "@Components/layout/MainLayout";

type Props = {};

function Products({}: Props): JSX.Element {
  return (
    <VStack w="100%">
      <CategoryTab />
      <ProductList />
    </VStack>
  );
}

export default Products;
