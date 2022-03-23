import axios from "@Lib/axios";
import { User } from "@Domains/profile/types";
import { AxiosResponse } from "axios";

type UpdateUserDTO = {
  body: Omit<User, "id">;
  userId: User["id"];
};

type UpdateUser = (dto: UpdateUserDTO) => Promise<AxiosResponse<User>>;
const updateUser: UpdateUser = (dto) => axios.put<User>(`/users/${dto.userId}`);
export type { UpdateUserDTO };
export default updateUser;
