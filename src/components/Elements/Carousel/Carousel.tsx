import { Box } from "@chakra-ui/react";
import CarouselArrow from "@Components/Elements/Carousel/CarouselArrow";
import CarouselContext from "@Components/Elements/Carousel/CarouselContext";
import CarouselFooter from "@Components/Elements/Carousel/CarouselFooter";
import CarouselImage from "@Components/Elements/Carousel/CarouselImage";
import React, { useContext } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Carousel() {
  const { state } = useContext(CarouselContext);

  return (
    <Box pos="relative" w="100%" maxW="100%" h="100%" maxH="100%">
      <CarouselArrow icon={HiChevronLeft} orientation="left" />
      <CarouselArrow icon={HiChevronRight} orientation="right" />
      <Box w="100%" maxW="100%" h="100%" maxH="100%" pos="relative">
        {!state.current ? (
          <CarouselImage label="no img" src="" />
        ) : (
          <CarouselImage label={state.current.label} src={state.current.src} />
        )}
      </Box>
      <CarouselFooter />
    </Box>
  );
}

export default Carousel;
