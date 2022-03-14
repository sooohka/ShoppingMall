import React from "react";
import { Product } from "@Domains/products/types";
import { Box, Center, Image, Skeleton, SkeletonText, Text, WrapItem } from "@chakra-ui/react";

type Props = {
  product: Product;
};

function SkeletonProductListItem(): JSX.Element {
  return (
    <WrapItem w="14rem" h="20rem" p="1rem">
      <Center w="14rem" flexDir="column">
        <Skeleton w="100%" h="10rem" />
        <Box w="100%" display="flex" flexDir="column" mt="1rem">
          <SkeletonText size="" />
        </Box>
      </Center>
    </WrapItem>
  );
}

function ProductListItem(props: Props): JSX.Element {
  const {
    product: { category, description, id, image, price, rating, title },
  } = props;
  if (false) return <SkeletonProductListItem />;
  return (
    <WrapItem
      border="1px solid "
      borderColor="gray.200"
      _hover={{ background: "gray.100", cursor: "pointer" }}
      w="15rem"
      h="20rem"
      p="1rem"
    >
      <Center w="14rem" flexDir="column">
        <Image w="100%" h="10rem" src={image} alt="title" />
        <Box w="100%" display="flex" flexDir="column" mt="1rem">
          <Text fontSize="lg" lineHeight="1.3" noOfLines={2}>
            {title}
          </Text>
          <Text fontSize="md">
            $<strong>{price}</strong>
          </Text>
          <Text fontSize="sm">
            평점:<strong>{rating.rate}</strong>
          </Text>
        </Box>
      </Center>
    </WrapItem>
  );
}

export default ProductListItem;
