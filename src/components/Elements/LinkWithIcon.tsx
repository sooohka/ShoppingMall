import { forwardRef, Icon, IconProps, Link, LinkProps, Text, TextProps } from "@chakra-ui/react";
import * as Type from "@Types/index";
import React from "react";
import * as RRD from "react-router-dom";

type Props = LinkProps &
  Type.LinkWithIcon & {
    iconProps?: IconProps;
    textProps?: TextProps;
  };
const LinkWithIcon = forwardRef<Props, "a">((props, ref) => {
  const { icon, label, to, iconProps, textProps, ...rest } = props;
  return (
    <Link ref={ref} as={RRD.Link} to={to} {...rest}>
      <Icon w={6} h={6} as={icon} {...iconProps} />
      <Text size="lg" {...textProps}>
        {label}
      </Text>
    </Link>
  );
});

export default LinkWithIcon;
