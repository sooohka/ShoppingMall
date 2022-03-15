import { Box, Icon, Link, Text, VStack } from "@chakra-ui/react";
import LinkButton from "@Components/Elements/LinkButton";
import React, { useContext, useEffect } from "react";
import { HiOutlineHome, HiOutlineShoppingCart, HiOutlineUser, HiShoppingBag } from "react-icons/hi";
import { Link as RRDLink, useLocation } from "react-router-dom";
import SidebarContext from "@Contexts/SidebarContext";

const Links = [
  {
    to: "/",
    icon: <Icon as={HiOutlineHome} />,
    label: "Home",
  },
  {
    to: "/app/products",
    icon: <Icon as={HiOutlineShoppingCart} />,
    label: "Shopping",
  },
  {
    to: "/app/profile",
    icon: <Icon as={HiOutlineUser} />,
    label: "Profile",
  },
];
type Props = {
  headerHeight: string;
  sidebarWidth: string;
};

function Sidebar(props: Props) {
  const { headerHeight, sidebarWidth } = props;
  const { pathname } = useLocation();

  const { isDesktop, isOpen, onClose } = useContext(SidebarContext);

  useEffect(() => {
    if (!isOpen && !isDesktop) onClose();
  }, [isDesktop, isOpen, onClose]);

  return (
    <>
      <Box d={`${isDesktop || isOpen ? "block" : "none"}`} h="100%" minW={sidebarWidth} />
      <Box
        transition="all"
        transitionDuration="1s"
        d={`${isDesktop || isOpen ? "flex" : "none"}`}
        position="fixed"
        w={sidebarWidth}
        h="100%"
        flexDir="column"
        as="aside"
      >
        <Box h={headerHeight} p="1rem" as="header" bg="gray.900">
          <Link h="100%" to="/" as={RRDLink} d="flex" gap=".5rem" alignItems="center">
            <Icon color="white" boxSize="8" as={HiShoppingBag} />
            <Text fontSize="2xl" color="white">
              ShoppingMall
            </Text>
          </Link>
        </Box>
        <Box w="100%" flex={1} as="nav" bg="gray.700" p={2}>
          <VStack>
            {Links.map((v) => (
              <LinkButton
                key={v.to}
                color={pathname === v.to ? "whiteAlpha.900" : "gray.300"}
                bg={pathname === v.to ? "gray.900" : ""}
                to={v.to}
                icon={v.icon}
              >
                {v.label}
              </LinkButton>
            ))}
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
