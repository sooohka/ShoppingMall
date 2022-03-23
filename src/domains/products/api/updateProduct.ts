import { Product } from "@Domains/products/types";
import axios from "@Lib/axios";
import { AxiosResponse } from "axios";

type UpdateProductDTO = {
  body: Omit<Product, "id">;
  productId: Product["id"];
};

type UpdateProduct = (data: UpdateProductDTO) => Promise<AxiosResponse<Product>>;

const updateProduct: UpdateProduct = (dto) => axios.put(`/products/${dto.productId}`, dto.body);
export type { UpdateProductDTO };
export default updateProduct;
