import axios from "@Lib/axios";
import { AxiosResponse } from "axios";
import { Product } from "@Domains/products/types";

type GetSingleProduct = (productId: Number) => Promise<AxiosResponse<Product>>;

const getSingleProduct: GetSingleProduct = (productId) => axios.get(`products/${productId}`);

export default getSingleProduct;
