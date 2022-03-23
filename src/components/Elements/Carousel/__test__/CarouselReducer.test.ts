import carouselReducer, {
  CAROUSEL_ACTION,
  initialState,
} from "@Components/Elements/Carousel/CarouselReducer";

const src =
  "https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80";
const src2 =
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const src3 =
  "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const src4 =
  "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80";

const src5 =
  "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80";

const media = [
  { src, label: "img1" },
  { src: src2, label: "img2" },
  { src: src3, label: "img3" },
  { src: src4, label: "img4" },
  { src: src5, label: "img5" },
];

describe("Carousel Reducer Test", () => {
  it("expect reducer to have initialValue when created", () => {
    const state = carouselReducer(initialState, CAROUSEL_ACTION.TEST());
    expect(state).toStrictEqual(initialState);
  });
  describe("set Media", () => {
    it("expect reducer to have media value in state when setMedia dispatched", () => {
      const state = carouselReducer(initialState, CAROUSEL_ACTION.SET_MEDIA({ media }));
      expect(state.media).toStrictEqual(media);
    });
  });
});
