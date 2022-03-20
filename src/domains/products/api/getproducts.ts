import axios from "@Lib/axios";
import { AxiosResponse } from "axios";
import { Product, ProductsSearchParams } from "@Domains/products/types";

type GetProducts = () => Promise<AxiosResponse<Product[]>>;
type GetProductsByCategory = (category: Product["category"]) => Promise<AxiosResponse<Product[]>>;

const getProducts: GetProducts = () => axios.get("/products");
const getProductsByCategory: GetProductsByCategory = (category) =>
  axios.get(`/products?${ProductsSearchParams.CATEGORY}=${category}`);

export { getProducts, getProductsByCategory };
