import { rest } from "msw";
import config from "@Config";
import { AddUserDTO } from "@Src/features/profile/api/addUser";
import { UpdateUserDTO } from "@Src/features/profile/api/updateUser";
import users from "../../model/users/users.json";

const getSingleUser = rest.get(`${config.api.url}/users/:userId`, (req, res, ctx) => {
  const { userId } = req.params;
  if (Number(userId) > 20) return res(ctx.status(404));
  return res(ctx.json(users[Number(userId)]), ctx.status(200));
});

const addUser = rest.post<AddUserDTO["body"]>(`${config.api.url}/users`, (req, res, ctx) =>
  res(ctx.json({ ...req.body, id: 0 }), ctx.status(200))
);

const updateUser = rest.put<UpdateUserDTO["body"]>(
  `${config.api.url}/users/:userId`,
  (req, res, ctx) => {
    const { userId } = req.params;
    if (Number(userId) > 20) return res(ctx.status(404));
    return res(ctx.json(req.body), ctx.status(200));
  }
);

const userHandlers = [getSingleUser, addUser, updateUser];

export default userHandlers;
