import { Box } from "@chakra-ui/react";
import { SidebarContextProvider } from "@Contexts/SidebarContext";
import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = { children: ReactNode };

function MainLayout({ children }: Props): JSX.Element {
  return (
    <SidebarContextProvider>
      <Box d="flex" w="100%" h="100%" maxH="100vh">
        <Sidebar />
        <Box d="flex" flexDir="column" flex={1}>
          <Header />
          <Box flex={1} as="main" overflow="hidden" h="80vh">
            {children}
          </Box>
        </Box>
      </Box>
    </SidebarContextProvider>
  );
}

export default MainLayout;
