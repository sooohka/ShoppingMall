import axios from "@Lib/axios";
import { AxiosResponse } from "axios";
import { User } from "@Domains/profile/types";

type AddUserDTO = {
  body: Omit<User, "id">;
  userId: User["id"];
};

type AddUser = (dto: AddUserDTO) => Promise<AxiosResponse<User>>;
const addUser: AddUser = (dto) => axios.post<User>("/users", dto.body);
export type { AddUserDTO };
export default addUser;
