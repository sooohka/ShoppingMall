import LinkWithIcon from "@Components/Elements/LinkWithIcon";
import * as Type from "@Types/index";
import React from "react";

function ProfileSummaryLinkItem(props: Type.LinkWithIcon) {
  const { icon, label, to } = props;
  return (
    <LinkWithIcon
      icon={icon}
      label={label}
      to={to}
      _hover={{ bg: "gray.100" }}
      p="6px"
      w="100%"
      d="flex"
      alignItems="center"
      gap="5px"
    />
  );
}

export default ProfileSummaryLinkItem;
