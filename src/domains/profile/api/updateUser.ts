import axios from "@Lib/axios";
import { User } from "@Domains/profile/types";
import { AxiosResponse } from "axios";

type UpdateUser = (user: User) => Promise<AxiosResponse<User>>;
const updateUser: UpdateUser = (user) => axios.put<User>(`/users/${user.id}`);

export default updateUser;
