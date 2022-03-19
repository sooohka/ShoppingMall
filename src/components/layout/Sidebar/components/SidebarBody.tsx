import { Box, Icon, VStack } from "@chakra-ui/react";
import LinkButton from "@Components/Elements/LinkButton";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "../types";

type Props = {
  Links: Link[];
};
function SidebarBody(props: Props) {
  const { Links } = props;
  const { pathname } = useLocation();
  return (
    <Box w="100%" flex={1} as="nav" bg="gray.700" p={2}>
      <VStack>
        {Links.map((v) => (
          <LinkButton
            key={v.to}
            color={pathname === v.to ? "whiteAlpha.900" : "gray.300"}
            bg={pathname === v.to ? "gray.900" : ""}
            to={v.to}
            icon={<Icon as={v.icon} />}
          >
            {v.label}
          </LinkButton>
        ))}
      </VStack>
    </Box>
  );
}

export default SidebarBody;
