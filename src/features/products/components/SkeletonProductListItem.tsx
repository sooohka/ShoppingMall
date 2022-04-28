import { Box, Center, Skeleton, SkeletonText, WrapItem } from "@chakra-ui/react";

const boxSize = {
  w: "15rem",
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
          <SkeletonText />
        </Box>
      </Center>
    </WrapItem>
  );
}
export default SkeletonProductListItem;
