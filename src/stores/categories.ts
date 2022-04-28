import getCategories from "@Src/features/categories/api/getCategories";
import { Category } from "@Src/features/categories/types";
import { atom, selector } from "recoil";

const currentCategoryState = atom<Category>({
  key: "currentCategoryState",
  default: { id: 0, name: "All" },
});

const categoriesState = selector({
  key: "categoriesState",
  get: async () => {
    const { data } = await getCategories();
    return [{ id: 0, name: "All" }, ...data];
  },
});

export { categoriesState, currentCategoryState };
