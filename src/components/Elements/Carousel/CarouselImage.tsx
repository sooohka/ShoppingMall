/* eslint-disable no-param-reassign */
import { Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  src: string;
  label: string;
};

function CarouselImage(props: Props) {
  const { src, label } = props;

  return (
    <Image m={0} userSelect="none" minW="100%" maxH="100%" objectFit="fill" src={src} alt={label} />
  );
}

export default CarouselImage;
