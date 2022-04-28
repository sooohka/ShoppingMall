import { Box, Center, Image, Text, WrapItem } from "@chakra-ui/react";
import { Product } from "@Src/features/products/types";
import React from "react";
import * as RRD from "react-router-dom";

type Props = {
  product: Product;
};

const boxSize = {
  w: "15rem",
  h: ["23rem", null, null, "20rem"],
};

const imageSize = {
  w: "10rem",
  h: "10rem",
};

function ProductListItem(props: Props): JSX.Element {
  const {
    product: { id, image, price, rating, title },
  } = props;
  const { pathname } = RRD.useLocation();

  return (
    <WrapItem
      to={`${pathname}/${id}`}
      as={RRD.Link}
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
