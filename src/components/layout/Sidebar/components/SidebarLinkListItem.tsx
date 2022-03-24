import React from "react";
import * as Type from "@Types/index";
import LinkWithIcon from "@Components/Elements/LinkWithIcon";
import { To } from "react-router-dom";

type Props = {
  selected: boolean;
  link: Type.LinkWithIcon;
  handleLinkClick: (link: To) => () => void;
};
function SidebarLinkListItem(props: Props) {
  const { link, handleLinkClick, selected } = props;
  return (
    <LinkWithIcon
      onClick={handleLinkClick(link.to)}
      to={link.to}
      icon={link.icon}
      label={link.label}
      w="100%"
      d="flex"
      p="10px"
      gap="8px"
      _active={{ bg: "" }}
      _focus={{ boxShadow: 0 }}
      _hover={{ bg: selected ? "" : "gray.500" }}
      borderRadius="md"
      fontSize="1.2rem"
      color={selected ? "whiteAlpha.900" : "gray.300"}
      bg={selected ? "gray.900" : ""}
    />
  );
}

export default SidebarLinkListItem;
