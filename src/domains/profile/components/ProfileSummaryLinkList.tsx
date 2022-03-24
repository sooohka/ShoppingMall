import { VStack } from "@chakra-ui/react";
import { LinkWithIcon } from "@Types/index";
import React from "react";
import ProfileSummaryLinkItem from "./ProfileSummaryLinkItem";

type Props = {
  links: LinkWithIcon[];
};

function ProfileSummaryLinkList({ links }: Props) {
  return (
    <VStack spacing={0}>
      {links.map((link) => (
        <ProfileSummaryLinkItem key={link.label} {...link} />
      ))}
    </VStack>
  );
}

export default ProfileSummaryLinkList;
