import { Box, HStack } from "@chakra-ui/react";
import CarouselArrow from "@Components/Elements/Carousel/CarouselArrow";
import CarouselContext from "@Components/Elements/Carousel/CarouselContext";
import CarouselFooter from "@Components/Elements/Carousel/CarouselFooter";
import CarouselImage from "@Components/Elements/Carousel/CarouselImage";
import React, { useContext, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Temp({ label, src }: any) {
  return (
    <Box w="25%" maxW="25%" h="100%" maxH="100%" pos="relative">
      <CarouselImage label={label} src={src} />
    </Box>
  );
}

function Carousel() {
  const { state } = useContext(CarouselContext);
  const imgBoxRef = useRef<HTMLDivElement>(null);

  const handleClick = (orientation: "left" | "right") => () => {};
  return (
    <Box pos="relative" w="100%" h="100%" maxH="100%">
      <CarouselArrow onClick={handleClick} icon={HiChevronLeft} orientation="left" />
      <CarouselArrow onClick={handleClick} icon={HiChevronRight} orientation="right" />
      <HStack h="100%" w="500%" ref={imgBoxRef}>
        <Box w="25%" maxW="25%" h="100%" maxH="100%" pos="relative">
          {!state.current ? (
            <CarouselImage label="no img" src="" />
          ) : (
            <CarouselImage label={state.current.label} src={state.current.src} />
          )}
        </Box>
        <Temp label="1" src={state.current?.src} />
        <Temp label="1" src={state.current?.src} />
        <Temp label="1" src={state.current?.src} />
        <Temp label="1" src={state.current?.src} />
      </HStack>

      <CarouselFooter />
    </Box>
  );
}

export default Carousel;
