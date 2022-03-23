import axios from "@Lib/axios";
import { User } from "@Domains/profile/types";
import { AxiosResponse } from "axios";

type GetSingleUserDTO = {
  userId: User["id"];
};
type GetSingleUser = (dto: GetSingleUserDTO) => Promise<AxiosResponse<User>>;
const getSingleUser: GetSingleUser = (dto) => axios.get<User>(`/users/${dto.userId}`);

export default getSingleUser;
