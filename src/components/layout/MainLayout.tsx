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
        <Box flex={1}>
          <Header />
          <Box as="main">{children}</Box>
        </Box>
      </Box>
    </SidebarContextProvider>
  );
}

export default MainLayout;
