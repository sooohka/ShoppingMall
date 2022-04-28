import CartItem from "@Src/features/cart/types";
import { atom, atomFamily, DefaultValue, selector, selectorFamily } from "recoil";

const cartItemsAtom = atomFamily<CartItem, number>({
  key: "cartItemsAtom",
});

const cartIdsState = atom<number[]>({
  key: "cartIds",
  default: [],
});

const cartItemsState = selectorFamily<CartItem, number>({
  key: "cartItemsState",
  get:
    (id: number) =>
    ({ get }) =>
      get(cartItemsAtom(id)),
  set:
    (id: number) =>
    ({ get, set, reset }, cartItem) => {
      const cartIds = get(cartIdsState);
      // 삭제
      if (cartItem instanceof DefaultValue) {
        reset(cartItemsAtom(id));
        set(cartIdsState, (prev) => prev.filter((v) => v !== id));
        return;
      }
      // 이미 존재하는경우
      if (cartIds.some((_id) => _id === id)) {
        reset(cartItemsAtom(id));
        set(cartItemsAtom(id), cartItem);
        return;
      }
      // 추가
      set(cartIdsState, (prev) => [...prev, id]);
      set(cartItemsAtom(id), cartItem);
    },
});

const cartStatsState = selector({
  key: "cartStatsState",
  get: ({ get }) => {
    const products = get(cartIdsState).map((id) => get(cartItemsAtom(id)));
    const totalPrice = products.reduce((prev, cur) => {
      const currentPriceTotal = cur.count * cur.price;
      return prev + currentPriceTotal;
    }, 0);
    return { totalPrice, products };
  },
});

export { cartItemsState, cartStatsState };
