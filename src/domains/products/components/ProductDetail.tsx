import { Box, Button, Icon, Image, Text, useBreakpoint, VStack } from "@chakra-ui/react";
import getSingleProduct from "@Domains/products/api/getSingleProduct";
import { Product } from "@Domains/products/types";
import useBreakPoints from "@Hooks/layout/useBreakpoints";
import React, { useEffect, useState } from "react";
import { HiStar } from "react-icons/hi";

function ProductDetail() {
  const [data, setData] = useState<Product>();
  const { sm, md } = useBreakPoints();

  useEffect(() => {
    (async function () {
      const res = await getSingleProduct({ productId: 1 });
      setData(res.data);
    })();
  }, []);
  if (!data) return null;
  if (md)
    return (
      <VStack w="100%" minW={["", "", "50rem"]} px="2" py="10">
        <Box d="flex" gap="10">
          <Image w="50%" src={data?.image} />
          <VStack w="50%" p={5}>
            <Text fontSize="3xl" as="h3" fontWeight="bold">
              {data?.title}
            </Text>
            <Text w="full" align="right" as="h5">
              Category:
              <strong>{data?.category.name}</strong>
            </Text>
            <Text as="h4" w="full" fontSize="2xl" fontWeight="bold">{`$${data?.price}`}</Text>
            <Text as="h5" w="full">
              {["0", "1", "2", "3", "4"].map((v, i) => {
                if (i + 1 < data.rating.rate) return <Icon key={v} as={HiStar} />;
                return null;
              })}
              ({data.rating.rate})
            </Text>
            <Text>{data?.description}</Text>
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
              <Button
                _hover={{}}
                _focus={{}}
                borderRadius={0}
                bg="blackAlpha.900"
                color="white"
                w="50%"
              >
                Buy now
              </Button>
            </Box>
          </VStack>
        </Box>
      </VStack>
    );
  return null;
}

export default ProductDetail;
