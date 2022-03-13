import axios from "@Lib/axios";
import { User } from "@Domains/profile/types";
import { AxiosResponse } from "axios";

type GetSingleUser = (userId: string) => Promise<AxiosResponse<User>>;
const getSingleUser: GetSingleUser = (userId) => axios.get<User>(`/users/${userId}`);

export default getSingleUser;
