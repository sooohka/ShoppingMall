import { Box, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RRDLink } from "react-router-dom";
import { LinkWithIcon } from "@Types/index";

type Props = { headerHeight: string; title: LinkWithIcon };

function SidebarHeader(props: Props) {
  const { headerHeight, title } = props;
  return (
    <Box h={headerHeight} p="1rem" as="header" bg="gray.900">
      <Link h="100%" to={title.to} as={RRDLink} d="flex" gap=".5rem" alignItems="center">
        <Icon color="white" boxSize="8" as={title.icon} />
        <Text fontSize="2xl" color="white">
          {title.label}
        </Text>
      </Link>
    </Box>
  );
}

export default SidebarHeader;
