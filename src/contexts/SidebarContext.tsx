import { useDisclosure } from "@chakra-ui/react";
import useBreakPoints from "@Hooks/layout/useBreakpoints";
import React, { createContext, ReactNode, useEffect, useLayoutEffect, useMemo } from "react";

type ContextType = {
  isOpen: boolean;
  isDesktop: boolean;
  onClose: () => void;
  onOpen: () => void;
  onToggle: () => void;
};
const SidebarContext = createContext<ContextType>({
  isOpen: false,
  isDesktop: false,
  onClose: () => {},
  onOpen: () => {},
  onToggle: () => {},
});
type Props = { children: ReactNode };

function SidebarContextProvider(props: Props) {
  const { children } = props;
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
  const { sm: isMobile, md: isDesktop } = useBreakPoints();

  const contextValue: ContextType = useMemo(
    () => ({
      isDesktop,
      isOpen,
      onOpen,
      onClose,
      onToggle,
    }),
    [isDesktop, isOpen, onClose, onOpen, onToggle]
  );
  useLayoutEffect(() => {
    if (isDesktop) onOpen();
    else if (isMobile) onClose();
  }, [isDesktop, isMobile, onClose, onOpen]);

  return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
}

export { SidebarContextProvider };
export default SidebarContext;
