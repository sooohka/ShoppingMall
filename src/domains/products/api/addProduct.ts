import axios from "@Lib/axios";
import { AxiosResponse } from "axios";
import { SimpleProduct } from "@Domains/products/types";

type AddProduct = (product: Omit<SimpleProduct, "id">) => Promise<AxiosResponse<SimpleProduct>>;

const addProduct: AddProduct = (product) => axios.post(`/products`, product);

export default addProduct;
