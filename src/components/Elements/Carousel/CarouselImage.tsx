/* eslint-disable no-param-reassign */
import { Image } from "@chakra-ui/react";
import { url } from "inspector";
import React, { RefObject, useEffect, useRef } from "react";

type Props = {
  src: string;
  label: string;
};

function CarouselImage(props: Props) {
  const { src, label } = props;
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <Image
      fallback={<div>loading...</div>}
      ref={imageRef}
      userSelect="none"
      pos="absolute"
      top={0}
      left={0}
      w="100%"
      h="100%"
      objectFit="fill"
      src={src}
      alt={label}
    />
  );
}

export default CarouselImage;
