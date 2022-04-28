import CartItem from "@Src/features/cart/types";
import { atom, atomFamily, selector } from "recoil";

const cartItemsState = atomFamily<CartItem, number>({
  key: "cartItemsState",
});

const cartIdsState = atom<number[]>({
  key: "cartIds",
  default: [],
});

const cartStatsState = selector({
  key: "cartStatsState",
  get: ({ get }) => {
    const products = get(cartIdsState).map((id) => get(cartItemsState(id)));
    const totalPrice = products.reduce((prev, cur) => {
      const currentPriceTotal = cur.count * cur.price;
      return prev + currentPriceTotal;
    }, 0);
    return { totalPrice, products };
  },
});

export { cartItemsState, cartIdsState, cartStatsState };
