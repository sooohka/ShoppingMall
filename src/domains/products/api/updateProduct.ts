import axios from "@Lib/axios";
import { AxiosResponse } from "axios";
import { SimpleProduct } from "@Domains/products/types";

type UpdateProduct = (product: SimpleProduct) => Promise<AxiosResponse<SimpleProduct>>;

const updateProduct: UpdateProduct = (product) => axios.get(`/products/${product.id}`);

export default updateProduct;
