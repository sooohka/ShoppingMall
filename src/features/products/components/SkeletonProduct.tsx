import { Box, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";
import useBreakPoints from "@Src/hooks/layout/useBreakpoints";
import React from "react";

function SkeletonProduct() {
  const { md } = useBreakPoints();
  if (md)
    return (
      <VStack w="100%" minW={["", "", "50rem"]} py="10">
        <Box px={["4", "", "", "14", "36"]} d="flex" w="full" gap="10">
          <Skeleton w="50%" h="30rem" />
          <Box p={5} d="flex" w="50%" flexDir="column" justifyContent="space-between">
            <Box d="flex" flexDir="column" gap=".5rem">
              <Skeleton height="2rem" />
              <Skeleton height="2rem" />
            </Box>
            <Box d="flex" justifyContent="flex-end">
              <Skeleton width="10rem" height="1rem" />
            </Box>
            <Box d="flex">
              <Skeleton width="10rem" height="2rem" />
            </Box>
            <Box d="flex">
              <Skeleton width="10rem" height="1rem" />
            </Box>
            <Box>
              <SkeletonText />
            </Box>
            <Box d="flex" justifyContent="space-between">
              <Skeleton width="49%" height="3rem" />
              <Skeleton width="49%" height="3rem" />
            </Box>
          </Box>
        </Box>
      </VStack>
    );
  return (
    <VStack w="100%" px="2" py="10" gap="1rem">
      <Skeleton w="20rem" h="20rem" />
      <Box w="full" h="16rem" d="flex" flexDir="column" justifyContent="space-between">
        <Skeleton w="full" height="2rem" />
        <Box w="full" d="flex" justifyContent="flex-end">
          <Skeleton w="8rem" height="1rem" />
        </Box>
        <Skeleton w="3rem" height="1rem" />
        <SkeletonText />
        <Box w="full" d="flex" justifyContent="space-between">
          <Skeleton w="49%" height="3rem" />
          <Skeleton w="49%" height="3rem" />
        </Box>
      </Box>
    </VStack>
  );
}

export default SkeletonProduct;
