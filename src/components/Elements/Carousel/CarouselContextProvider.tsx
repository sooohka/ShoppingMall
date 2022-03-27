import Carousel from "@Components/Elements/Carousel/Carousel";
import CarouselContext from "@Components/Elements/Carousel/CarouselContext";
import carouselReducer, {
  CAROUSEL_ACTION,
  initialState,
} from "@Components/Elements/Carousel/CarouselReducer";
import { Media } from "@Components/Elements/Carousel/types";
import React, { useEffect, useMemo, useReducer } from "react";

type Props = {
  media: Media[];
  startIdx?: number;
};

function CarouselContextProvider(props: Props) {
  const { media, startIdx } = props;
  const [state, dispatch] = useReducer(carouselReducer, initialState);

  useEffect(() => {
    const makeInterval = () =>
      setInterval(() => {
        dispatch(CAROUSEL_ACTION.GO_NEXT());
      }, 4000);
    const t = makeInterval();
    return () => {
      clearInterval(t);
    };
  }, []);

  useEffect(() => {
    dispatch(CAROUSEL_ACTION.SET_MEDIA({ media }));
    if (startIdx) dispatch(CAROUSEL_ACTION.GO_SPECIFIC({ idx: startIdx }));
  }, [media, startIdx]);

  const value = useMemo(() => ({ dispatch, state }), [state]);
  return (
    <CarouselContext.Provider value={value}>
      <Carousel />
    </CarouselContext.Provider>
  );
}

export default CarouselContextProvider;
