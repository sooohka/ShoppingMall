import { Product } from "@Src/features/products/types";
import axios from "@Lib/axios";
import { AxiosResponse } from "axios";

type AddProductDTO = { body: Omit<Product, "id" | "rating"> };

type AddProduct = (dto: AddProductDTO) => Promise<AxiosResponse<void>>;

const addProduct: AddProduct = (dto) => axios.post(`/products`, dto.body);
export type { AddProductDTO };
export default addProduct;
