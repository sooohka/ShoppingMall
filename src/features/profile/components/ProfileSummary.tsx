import { Avatar, Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { LinkWithIcon } from "@Types/index";
import React from "react";
import { HiOutlineLogout, HiUser } from "react-icons/hi";
import ProfileSummaryLinkList from "./ProfileSummaryLinkList";

const links: LinkWithIcon[] = [
  { to: "/app/profile", icon: HiUser, label: "profile" },
  { to: "/", icon: HiOutlineLogout, label: "Log out" },
];
function ProfileSummary() {
  return (
    <Popover closeOnBlur size="10rem" placement="bottom-end">
      <PopoverTrigger>
        <Avatar aria-haspopup="menu" size="md" _hover={{ cursor: "pointer" }} />
      </PopoverTrigger>
      <PopoverContent _focus={{ outline: "none" }} w="10rem">
        <ProfileSummaryLinkList links={links} />
      </PopoverContent>
    </Popover>
  );
}

export default ProfileSummary;
