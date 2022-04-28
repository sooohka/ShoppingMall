import { Box, Icon, IconButton } from "@chakra-ui/react";
import SidebarContext from "@Contexts/SidebarContext";
import ProfileSummary from "@Src/features/profile/components/ProfileSummary";
import theme from "@Src/styles/theme";
import React, { useContext } from "react";
import { HiMenu } from "react-icons/hi";

function Header() {
  const { onOpen, isOpen, isDesktop } = useContext(SidebarContext);
  return (
    <Box
      pl=".5rem"
      pr="2rem"
      d="flex"
      alignItems="center"
      as="header"
      h={theme.layout.header.height}
      maxW="100vw"
      w="100%"
      borderBottom="1px solid gray"
      bgColor="white"
      zIndex="header"
    >
      <Box flex="1">
        {!isOpen && (
          <IconButton
            d={isDesktop ? "none" : "block"}
            onClick={onOpen}
            aria-label="close sidebar"
            fontSize="1.5rem"
            icon={<Icon as={HiMenu} />}
            size="lg"
            bg="none"
            _hover={{ bg: "none" }}
          />
        )}
      </Box>
      <Box>
        <ProfileSummary />
      </Box>
    </Box>
  );
}

export default Header;
