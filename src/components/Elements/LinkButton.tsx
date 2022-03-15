import { Button, ButtonProps } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  icon: ReactElement;
  children: ReactNode;
} & ButtonProps;
function LinkButton(props: Props) {
  const { to, icon, children, ...rest } = props;
  return (
    <Button
      _active={{ bg: "" }}
      _focus={{ boxShadow: 0 }}
      _hover={{ opacity: 0.9 }}
      w="15rem"
      justifyContent="left"
      fontSize="1.2rem"
      leftIcon={icon}
      as={Link}
      to={to}
      textAlign="left"
      iconSpacing={3}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default LinkButton;
