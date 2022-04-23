import { Box, Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import SidebarContext from "@Contexts/SidebarContext";
import theme from "@Src/styles/theme";
import React, { useContext } from "react";
import {
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiShoppingBag,
} from "react-icons/hi";
import SidebarBody from "./components/SidebarBody";
import SidebarHeader from "./components/SidebarHeader";

const title = {
  to: "/app",
  icon: HiShoppingBag,
  label: "ShoppingMall",
};

const Links = [
  {
    to: "/app",
    icon: HiOutlineHome,
    label: "Home",
  },
  {
    to: "/app/products",
    icon: HiOutlineShoppingBag,
    label: "쇼핑하기",
  },
  {
    to: "/app/cart",
    icon: HiOutlineShoppingCart,
    label: "장바구니",
  },
];

function Sidebar() {
  const { isDesktop, isOpen, onClose } = useContext(SidebarContext);

  if (isDesktop)
    return (
      <Box minH="100vh">
        <Box
          d="flex"
          w={theme.layout.sidebar}
          h="100%"
          flexDir="column"
          as="aside"
          zIndex="sidebar"
        >
          <SidebarHeader title={title} />
          <SidebarBody links={Links} />
        </Box>
      </Box>
    );

  return (
    <Drawer autoFocus={false} placement="left" isOpen={isOpen} onClose={onClose} size="xs">
      <DrawerOverlay />
      <DrawerContent w={theme.layout.sidebar.width} maxW={theme.layout.sidebar.width}>
        <SidebarHeader title={title} />
        <SidebarBody links={Links} />
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;
