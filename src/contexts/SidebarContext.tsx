import { useDisclosure } from "@chakra-ui/react";
import useBreakPoints from "@Hooks/layout/useBreakpoints";
import React, { createContext, ReactNode, useMemo } from "react";

type ContextType = {
  isOpen: boolean;
  isDesktop: boolean;
  onClose: () => void;
  onToggle: () => void;
};
const SidebarContext = createContext<ContextType>({
  isOpen: false,
  isDesktop: true,
  onClose: () => {},
  onToggle: () => {},
});
type Props = { children: ReactNode };

function SidebarContextProvider(props: Props) {
  const { children } = props;
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { md } = useBreakPoints();

  const contextValue: ContextType = useMemo(
    () => ({
      isDesktop: md,
      isOpen,
      onClose,
      onToggle,
    }),
    [isOpen, md, onClose, onToggle]
  );

  return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
}

export { SidebarContextProvider };
export default SidebarContext;
