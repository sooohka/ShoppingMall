import { Box, Icon, IconButton } from "@chakra-ui/react";
import SidebarContext from "@Contexts/SidebarContext";
import React, { useContext } from "react";
import { HiMenu, HiX } from "react-icons/hi";

type Props = {
  headerHeight: string;
};
function Header(props: Props) {
  const { headerHeight } = props;
  const { onOpen, isOpen, isDesktop } = useContext(SidebarContext);
  return (
    <Box
      as="header"
      h={headerHeight}
      w="100%"
      borderBottom="1px solid gray"
      bgColor="white"
      zIndex="header"
    >
      {!isOpen && (
        <IconButton
          d={isDesktop ? "none" : "block"}
          onClick={onOpen}
          aria-label="close sidebar"
          fontSize="1.5rem"
          icon={<Icon as={HiMenu} />}
          bg="none"
        />
      )}
    </Box>
  );
}

export default Header;
