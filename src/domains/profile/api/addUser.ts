import axios from "@Lib/axios";
import { AxiosResponse } from "axios";
import { User } from "@Domains/profile/types";

type AddUser = (user: Omit<User, "id">) => Promise<AxiosResponse<User>>;
const addUser: AddUser = (user) => axios.post<User>("/users", user);

export default addUser;
