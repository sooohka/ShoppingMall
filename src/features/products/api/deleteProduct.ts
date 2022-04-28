import { Product } from "@Src/features/products/types";
import axios from "@Lib/axios";
import { AxiosResponse } from "axios";

type DeleteProductDTO = { body: any; productId: Pick<Product, "id"> };
type DeleteProduct = (dto: DeleteProductDTO) => Promise<AxiosResponse<void>>;

const deleteProduct: DeleteProduct = (dto) => axios.delete(`/products/${dto.productId}`);
export type { DeleteProductDTO };
export default deleteProduct;
