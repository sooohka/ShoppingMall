import { Box } from "@chakra-ui/react";
import { SidebarContextProvider } from "@Contexts/SidebarContext";
import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = { children: ReactNode };

const sidebarWidth = "15rem";
const headerHeight = "5rem";
function MainLayout({ children }: Props): JSX.Element {
  return (
    <SidebarContextProvider>
      <Box d="flex" w="100%" h="100%">
        <Sidebar headerHeight={headerHeight} sidebarWidth={sidebarWidth} />
        <Box flex={1}>
          <Header headerHeight={headerHeight} />
          <Box as="main">{children}</Box>
        </Box>
      </Box>
    </SidebarContextProvider>
  );
}

export default MainLayout;
