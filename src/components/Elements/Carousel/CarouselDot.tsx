import { ListItem } from "@chakra-ui/react";
import React from "react";

type DotProps = {
  selected: boolean;
  handleClick: () => void;
};

function CarouselDot(props: DotProps) {
  const { selected, handleClick } = props;
  return (
    <ListItem
      onClick={handleClick}
      _hover={{ bg: "gray.800", cursor: "pointer" }}
      bg="gray.400"
      opacity={selected ? 1 : 0.3}
      box-shadow="1px 1px 2px rgb(0 0 0 / 90%)"
      background="#fff"
      border-radius="50%"
      width="10px"
      height="10px"
      cursor="pointer"
      display="inline-block"
      borderRadius="10px"
    />
  );
}

export default CarouselDot;
