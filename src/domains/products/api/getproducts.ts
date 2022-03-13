import axios from "@Lib/axios";
import {AxiosResponse} from "axios";
import {Product} from "@Domains/products/types";

type GetProducts = () => Promise<AxiosResponse<Product[]>>;

const getProducts: GetProducts = () => axios.get("/products");

export default getProducts;
