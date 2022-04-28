import axios from "@Lib/axios";
import { AxiosResponse } from "axios";
import { Product } from "@Src/features/products/types";

enum ProductsSearchParams {
  CATEGORY = "category",
}

type GetProductByCategoryDTO = { body: any; categoryId: Product["category"]["id"] };

type GetProducts = () => Promise<AxiosResponse<Product[]>>;
type GetProductsByCategory = (dto: GetProductByCategoryDTO) => Promise<AxiosResponse<Product[]>>;

const getProducts: GetProducts = () => axios.get("/products");
const getProductsByCategory: GetProductsByCategory = (dto) =>
  axios.get(`/products?${ProductsSearchParams.CATEGORY}=${dto.categoryId}`);
export type { GetProductByCategoryDTO };
export { getProducts, getProductsByCategory, ProductsSearchParams };
