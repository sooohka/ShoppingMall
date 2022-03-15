import axios from "@Lib/axios";
import { AxiosResponse } from "axios";

type DeleteProduct = (productId: Number) => Promise<AxiosResponse>;

const deleteProduct: DeleteProduct = (productId) => axios.delete(`/products/${productId}`);

export default deleteProduct;
