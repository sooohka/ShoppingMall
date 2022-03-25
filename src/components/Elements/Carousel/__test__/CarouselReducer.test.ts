import carouselReducer, {
  CAROUSEL_ACTION,
  initialState,
} from "@Components/Elements/Carousel/CarouselReducer";

const media = [
  { src: "src", label: "img1" },
  { src: "src2", label: "img2" },
  { src: "src3", label: "img3" },
  { src: "src4", label: "img4" },
  { src: "src5", label: "img5" },
];

describe("Carousel Reducer Test", () => {
  it("expect reducer to have initialValue when created", () => {
    const state = carouselReducer(initialState, CAROUSEL_ACTION.TEST());
    expect(state).toStrictEqual(initialState);
  });

  describe("setMedia action", () => {
    it("expect reducer to have media value in state", () => {
      const state = carouselReducer(initialState, CAROUSEL_ACTION.SET_MEDIA({ media }));
      expect(state.media).not.toBe(media);
      expect(state.media).toStrictEqual(media);
    });

    it("expect reducer to have media value of index 0", () => {
      const state = carouselReducer(initialState, CAROUSEL_ACTION.SET_MEDIA({ media }));
      expect(state.current).toStrictEqual({ ...media[0], idx: 0 });
    });

    it("expect reducer to throw value when media's length is 0", () => {
      expect(() =>
        carouselReducer(initialState, CAROUSEL_ACTION.SET_MEDIA({ media: [] }))
      ).toThrow();
    });
  });

  describe("goNext action", () => {
    it("expect reducer state.current to have next index as value", () => {
      let state = carouselReducer(initialState, CAROUSEL_ACTION.SET_MEDIA({ media }));

      state = carouselReducer(state, CAROUSEL_ACTION.GO_NEXT());

      expect(state.current).toStrictEqual({ ...media[1], idx: 1 });
    });

    it("현재 상태의 current[idx] 값이 media의 마지막 인덱스일 경우 current[idx]를 0번째 인덱스로 이동", () => {
      const state = carouselReducer(
        { current: { ...media[media.length - 1], idx: media.length - 1 }, media },
        CAROUSEL_ACTION.GO_NEXT()
      );

      expect(state.current).toStrictEqual({ ...media[0], idx: 0 });
    });

    it("expect reducer state to throw when state.current is empty", () => {
      expect(() => {
        carouselReducer({ current: null, media }, CAROUSEL_ACTION.GO_NEXT());
      }).toThrow();
    });
  });
  describe("goPrev action", () => {
    it("현재 상태의 current[idx] 값이 media의 0번째 인덱스일 경우 current[idx]를 마지막 인덱스로 이동", () => {
      let state = carouselReducer(initialState, CAROUSEL_ACTION.SET_MEDIA({ media }));

      state = carouselReducer(state, CAROUSEL_ACTION.GO_PREV());

      expect(state.current).toStrictEqual({ ...media[media.length - 1], idx: media.length - 1 });
    });

    it("expect reducer state.current to have prev index as value", () => {
      const state = carouselReducer(
        { current: { ...media[media.length - 1], idx: media.length - 1 }, media },
        CAROUSEL_ACTION.GO_PREV()
      );

      expect(state.current).toStrictEqual({ ...media[media.length - 2], idx: media.length - 2 });
    });

    it("expect reducer state to throw when state.current is empty", () => {
      expect(() => {
        carouselReducer({ current: null, media }, CAROUSEL_ACTION.GO_PREV());
      }).toThrow();
    });
  });
  describe("goSpecific action", () => {
    it("expect reducer state.current to have media[0]", () => {
      const state = carouselReducer(
        { current: { ...media[media.length - 1], idx: media.length - 1 }, media },
        CAROUSEL_ACTION.GO_SPECIFIC({ idx: 0 })
      );

      expect(state.current).toStrictEqual({ ...media[0], idx: 0 });
    });

    it("expect reducer state to throw RangeError when array out of range", () => {
      expect(() => {
        carouselReducer({ current: null, media }, CAROUSEL_ACTION.GO_SPECIFIC({ idx: 100 }));
      }).toThrow(RangeError);
    });
  });
});
