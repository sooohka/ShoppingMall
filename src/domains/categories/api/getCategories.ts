import { AxiosResponse } from "axios";
import axios from "@Lib/axios";
import { Category } from "@Domains/categories/types";

type GetCategories = () => Promise<AxiosResponse<Category[]>>;
const getCategories: GetCategories = () => axios.get(`/products/categories`);

export default getCategories;
