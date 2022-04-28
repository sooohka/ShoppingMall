import axios from "@Lib/axios";
import { AxiosResponse } from "axios";
import { Product } from "@Src/features/products/types";

type GetSingleProductDTO = {
  body?: any;
  productId: string | number;
};

type GetSingleProduct = (dto: GetSingleProductDTO) => Promise<AxiosResponse<Product>>;

const getSingleProduct: GetSingleProduct = (dto) => axios.get(`/products/${dto.productId}`);
export type { GetSingleProductDTO };
export default getSingleProduct;
