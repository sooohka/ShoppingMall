import { Box, Button, Icon, Text, VStack } from "@chakra-ui/react";
import { Product } from "@Domains/products/types";
import React from "react";
import { HiStar } from "react-icons/hi";

type Props = {
  product: Product;
  width: string;
};

function ProductDetail({ product, width }: Props) {
  return (
    <VStack w={width} p={5}>
      <Text fontSize="3xl" as="h3" fontWeight="bold">
        {product.title}
      </Text>
      <Text w="full" align="right" as="h5">
        Category:
        <strong>{product.category.name}</strong>
      </Text>
      <Text as="h4" w="full" fontSize="2xl" fontWeight="bold">{`$${product.price}`}</Text>
      <Text as="h5" w="full">
        {["0", "1", "2", "3", "4"].map((v, i) => {
          if (i + 1 < product.rating.rate) return <Icon key={v} as={HiStar} />;
          return null;
        })}
        ({product.rating.rate})
      </Text>
      <Text>{product.description}</Text>
      <Box w="full">
        <Button
          _hover={{}}
          _focus={{}}
          borderRadius={0}
          border="1px"
          borderColor="gray.500"
          bg="white"
          color="black"
          w="50%"
        >
          Add to Cart
        </Button>
        <Button _hover={{}} _focus={{}} borderRadius={0} bg="blackAlpha.900" color="white" w="50%">
          Buy now
        </Button>
      </Box>
    </VStack>
  );
}

export default ProductDetail;
