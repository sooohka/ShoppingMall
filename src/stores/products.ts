import { getProducts } from "@Src/features/products/api/getproducts";
import { Product } from "@Src/features/products/types";
import { currentCategoryState } from "@Src/stores/categories";
import { selector, selectorFamily } from "recoil";

const productsState = selector<Product[]>({
  key: "itemsState",
  get: async () => {
    const a = await new Promise((res) => {
      setTimeout(() => res(1), 1000);
    });
    const { data } = await getProducts();
    return data;
  },
});

const filteredProductsState = selector({
  key: "filteredProductsState",
  get: ({ get }) => {
    const category = get(currentCategoryState);
    const products = get(productsState);
    if (category.id === 0) {
      return products;
    }
    const filtered = products.filter((product) => product.category.id === category.id);
    return filtered;
  },
});
const currentProductState = selectorFamily({
  key: "currentProductState",
  get:
    (id: number) =>
    async ({ get }) => {
      const products = get(productsState);
      return products.find((product) => product.id === id);
    },
});

export { productsState, filteredProductsState, currentProductState };
