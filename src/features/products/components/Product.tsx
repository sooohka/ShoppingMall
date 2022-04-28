import { Box, Image, VStack } from "@chakra-ui/react";
import useBreakPoints from "@Hooks/layout/useBreakpoints";
import ProductDetail from "@Src/features/products/components/ProductDetail";
import { currentProductState } from "@Src/stores/products";
import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";

function Product() {
  const { md } = useBreakPoints();
  const { productId } = useParams();
  const product = useRecoilValueLoadable(currentProductState(Number(productId)));

  if (product.state === "hasError") {
    return <div>error</div>;
  }
  if (product.state === "loading") {
    return <div>loading</div>;
  }

  if (!product.contents) return <div>no content</div>;
  if (md)
    return (
      <VStack px={["4", "", "", "14", "36"]} w="100%" minW={["", "", "50rem"]} py="10">
        <Box d="flex" gap="10">
          <Image w="50%" src={product.contents.image} />
          <ProductDetail product={product.contents} width="50%" />
        </Box>
      </VStack>
    );
  return (
    <VStack w="100%" px="2" py="10">
      <Image w={["70%", "30%"]} src={product.contents.image} />
      <ProductDetail product={product.contents} width="100%" />
    </VStack>
  );
}

export default Product;
