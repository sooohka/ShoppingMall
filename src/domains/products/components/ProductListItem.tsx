import React from "react";
import { Product } from "@Domains/products/types";
import { Box, Center, Image, Skeleton, SkeletonText, Text, WrapItem } from "@chakra-ui/react";

type Props = {
  product: Product;
};

const boxSize = {
  w: ["18rem", null, null, "15rem"],
  h: ["23rem", null, null, "20rem"],
};

const imageSize = {
  w: "100%",
  h: ["70%", null, null, "50%"],
};

function SkeletonProductListItem(): JSX.Element {
  return (
    <WrapItem {...boxSize} p="1rem">
      <Center {...boxSize} flexDir="column">
        <Skeleton {...imageSize} />
        <Box w="100%" display="flex" flexDir="column" mt="1rem">
          <SkeletonText size="" />
        </Box>
      </Center>
    </WrapItem>
  );
}

function ProductListItem(props: Props): JSX.Element {
  const {
    product: { image, price, rating, title },
  } = props;
  if (false) return <SkeletonProductListItem />;
  return (
    <WrapItem
      border="1px solid "
      borderColor="gray.200"
      _hover={{ background: "gray.100", cursor: "pointer" }}
      {...boxSize}
      p="1rem"
    >
      <Center w="100%" h="100%" flexDir="column">
        <Image {...imageSize} src={image} alt="title" />
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
