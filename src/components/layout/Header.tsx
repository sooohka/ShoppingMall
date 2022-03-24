import { Box, Icon, IconButton } from "@chakra-ui/react";
import SidebarContext from "@Contexts/SidebarContext";
import ProfileSummary from "@Domains/profile/components/ProfileSummary";
import React, { useContext } from "react";
import { HiMenu } from "react-icons/hi";

type Props = {
  headerHeight: string;
};
function Header(props: Props) {
  const { headerHeight } = props;
  const { onOpen, isOpen, isDesktop } = useContext(SidebarContext);
  return (
    <Box
      pl=".5rem"
      pr="2rem"
      d="flex"
      alignItems="center"
      as="header"
      h={headerHeight}
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
