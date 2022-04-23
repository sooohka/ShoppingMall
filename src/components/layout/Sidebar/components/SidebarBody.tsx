import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import * as Type from "@Types/index";
import SidebarLinkList from "./SidebarLinkList";

type Props = {
  links: Type.LinkWithIcon[];
};
function SidebarBody(props: Props) {
  const { links } = props;
  return (
    <Box zIndex="inherit" w="100%" flex={1} as="nav" bg="gray.700" p={2}>
      <VStack>
        <SidebarLinkList links={links} />
      </VStack>
    </Box>
  );
}

export default SidebarBody;
