import { Box } from "@chakra-ui/react";
import CarouselArrow from "@Components/Elements/Carousel/CarouselArrow";
import CarouselContext from "@Components/Elements/Carousel/CarouselContext";
import CarouselFooter from "@Components/Elements/Carousel/CarouselFooter";
import CarouselImage from "@Components/Elements/Carousel/CarouselImage";
import { CAROUSEL_ACTION } from "@Src/components/Elements/Carousel/CarouselReducer";
import React, { useContext, useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Temp({ label, src }: any) {
  return (
    <Box w="25%" maxW="25%" h="100%" maxH="100%" pos="relative">
      <CarouselImage label={label} src={src} />
    </Box>
  );
}

function Carousel() {
  const { state, dispatch } = useContext(CarouselContext);
  const [currentTransform, setCurrentTransform] = useState("translateX(0%)");
  const imgBoxRef = useRef<HTMLDivElement>(null);

  const handleClick = (orientation: "left" | "right") => () => {
    if (orientation === "right") {
      dispatch(CAROUSEL_ACTION.GO_NEXT());
    }
    if (orientation === "left") {
      dispatch(CAROUSEL_ACTION.GO_PREV());
    }
  };

  useEffect(() => {
    if (state.current === null) {
      return;
    }

    setCurrentTransform(`translateX(-${state.current.idx * 100}%)`);
  }, [state]);

  return (
    <Box pos="relative" w="100%" h="100%" maxH="100%">
      <CarouselArrow onClick={handleClick} icon={HiChevronLeft} orientation="left" />
      <CarouselArrow onClick={handleClick} icon={HiChevronRight} orientation="right" />
      <Box
        d="flex"
        w="100%"
        h="100%"
        ref={imgBoxRef}
        transitionDuration="1s"
        transform={currentTransform}
      >
        {state.media.map((v) => (
          <CarouselImage key={v.src} label={v.label} src={v.src} />
        ))}
      </Box>

      <CarouselFooter />
    </Box>
  );
}

export default Carousel;
