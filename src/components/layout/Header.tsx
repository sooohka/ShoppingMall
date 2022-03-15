import { Box, Icon, IconButton } from "@chakra-ui/react";
import SidebarContext from "@Contexts/SidebarContext";
import React, { useContext } from "react";
import { HiMenu, HiX } from "react-icons/hi";

type Props = {
  headerHeight: string;
};
function Header(props: Props) {
  const { headerHeight } = props;
  const { onToggle, isOpen, isDesktop } = useContext(SidebarContext);
  return (
    <Box
      as="header"
      position="fixed"
      h={headerHeight}
      w="100%"
      borderBottom="1px solid gray"
      bgColor="white"
      // zIndex={100}
    >
      <IconButton
        d={isDesktop ? "none" : "block"}
        onClick={onToggle}
        aria-label="close sidebar"
        fontSize="1.5rem"
        icon={
          isOpen ? (
            <Icon>
              <HiX />
            </Icon>
          ) : (
            <Icon>
              <HiMenu />
            </Icon>
          )
        }
        bg="none"
      />
    </Box>
  );
}

export default Header;
