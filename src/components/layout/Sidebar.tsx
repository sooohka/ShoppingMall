import { Box, Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import SidebarContext from "@Contexts/SidebarContext";
import React, { useContext } from "react";
import {
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiShoppingBag,
} from "react-icons/hi";
import SidebarBody from "./Sidebar/components/SidebarBody";
import SidebarHeader from "./Sidebar/components/SidebarHeader";

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

type Props = {
  headerHeight: string;
  sidebarWidth: string;
};

function Sidebar(props: Props) {
  const { headerHeight, sidebarWidth } = props;
  const { isDesktop, isOpen, onClose } = useContext(SidebarContext);

  if (isDesktop)
    return (
      <Box minH="100vh">
        <Box d="flex" w={sidebarWidth} h="100%" flexDir="column" as="aside" zIndex="sidebar">
          <SidebarHeader title={title} headerHeight={headerHeight} />
          <SidebarBody links={Links} />
        </Box>
      </Box>
    );

  return (
    <Drawer autoFocus={false} placement="left" isOpen={isOpen} onClose={onClose} size="xs">
      <DrawerOverlay />
      <DrawerContent w={sidebarWidth} maxW={sidebarWidth}>
        <SidebarHeader title={title} headerHeight={headerHeight} />
        <SidebarBody links={Links} />
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;
