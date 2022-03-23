import {
  CarouselAction,
  CarouselState,
  initialState,
} from "@Components/Elements/Carousel/CarouselReducer";
import React, { createContext } from "react";

type Type = {
  dispatch: React.Dispatch<CarouselAction>;
  state: CarouselState;
};
const CarouselContext = createContext<Type>({ dispatch: () => {}, state: initialState });

export default CarouselContext;
