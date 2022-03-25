import { HStack, List } from "@chakra-ui/react";
import CarouselContext from "@Components/Elements/Carousel/CarouselContext";
import CarouselDot from "@Components/Elements/Carousel/CarouselDot";
import { CAROUSEL_ACTION } from "@Components/Elements/Carousel/CarouselReducer";
import React, { useContext } from "react";

function CarouselFooter() {
  const { state, dispatch } = useContext(CarouselContext);
  const handleDotClick = (idx: number) => () => {
    dispatch(CAROUSEL_ACTION.GO_SPECIFIC({ idx }));
  };
  return (
    <HStack
      as={List}
      d="flex"
      justifyContent="center"
      alignItems="center"
      gap="5px"
      pos="absolute"
      bottom={0}
      w="100%"
      h="10%"
    >
      {state.media.map(({ label }, idx) => (
        <CarouselDot
          key={label}
          selected={idx === state.current?.idx}
          handleClick={handleDotClick(idx)}
        />
      ))}
    </HStack>
  );
}

export default CarouselFooter;
