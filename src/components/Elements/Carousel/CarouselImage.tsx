import { Img } from "@chakra-ui/react";
import React from "react";

type Props = {
  src: string;
  label: string;
};
function CarouselImage(props: Props) {
  const { src, label } = props;
  return <Img pos="absolute" top={0} left={0} h="100%" w="100%" src={src} alt={label} />;
}

export default CarouselImage;
