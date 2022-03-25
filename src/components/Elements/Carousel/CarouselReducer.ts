import { Media } from "@Components/Elements/Carousel/types";
import { Reducer } from "react";

const CAROUSEL_ACTION = {
  SET_MEDIA({ media }: { media: Media[] }, debug = false) {
    return { type: "carousel/setMedia" as const, payload: { media }, debug };
  },
  GO_NEXT(debug = false) {
    return { type: "carousel/goNext" as const, debug };
  },
  GO_PREV(debug = false) {
    return { type: "carousel/goPrev" as const, debug };
  },
  GO_SPECIFIC({ idx }: { idx: number }, debug = false) {
    return { type: "carousel/goSpecific" as const, payload: { idx }, debug };
  },
  TEST(debug = false) {
    return { type: "carousel/test" as const, debug };
  },
};

type CarouselState = {
  media: Media[];
  current:
    | null
    | ({
        idx: number;
      } & Media);
};

type CarouselAction =
  | ReturnType<typeof CAROUSEL_ACTION["SET_MEDIA"]>
  | ReturnType<typeof CAROUSEL_ACTION["GO_NEXT"]>
  | ReturnType<typeof CAROUSEL_ACTION["GO_PREV"]>
  | ReturnType<typeof CAROUSEL_ACTION["GO_SPECIFIC"]>
  | ReturnType<typeof CAROUSEL_ACTION["TEST"]>;

const initialState: CarouselState = {
  media: [],
  current: null,
};

type CarouselReducer = Reducer<CarouselState, CarouselAction>;
const carouselReducer: CarouselReducer = (state, action) => {
  if (action.debug) {
    console.log("prev value:", state);
    console.log("action:", action);
  }
  switch (action.type) {
    case "carousel/setMedia": {
      const { media } = action.payload;
      if (media.length === 0) throw new Error("Carousel:no media provided");

      return { current: { ...media[0], idx: 0 }, media: [...media] };
    }
    case "carousel/goNext": {
      const { current, media } = state;
      if (!current) throw new Error("Carousel:no current Element Selected");
      const incremented = current.idx + 1;
      if (incremented >= media.length) return { media, current: { ...media[0], idx: 0 } };
      return { media, current: { ...media[incremented], idx: incremented } };
    }
    case "carousel/goPrev": {
      const { current, media } = state;
      if (!current) throw new Error("Carousel:no current Element Selected");
      const decrementedId = current.idx - 1;
      if (decrementedId < 0)
        return { ...state, current: { ...media[media.length - 1], idx: media.length - 1 } };
      return { ...state, current: { ...media[decrementedId], idx: decrementedId } };
    }
    case "carousel/goSpecific": {
      const { media } = state;
      const { idx } = action.payload;
      if (idx < 0 || idx >= media.length) throw new RangeError("idx provided out of range");
      return { ...state, current: { ...media[idx], idx } };
    }
    case "carousel/test": {
      return state;
    }
    default: {
      return state;
    }
  }
};

export type { CarouselAction, CarouselReducer, CarouselState };
export { CAROUSEL_ACTION, initialState };

export default carouselReducer;
