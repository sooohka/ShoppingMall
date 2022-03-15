import { rest } from "msw";
import config from "@Config/index";
import users from "../../model/users/users.json";

type User = {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
};

const getSingleUser = rest.get(`${config.api.url}/users/:userId`, (req, res, ctx) => {
  const { userId } = req.params;
  if (Number(userId) > 20) return res(ctx.status(404));
  return res(ctx.json(users[Number(userId)]), ctx.status(200));
});

const addUser = rest.post<User>(`${config.api.url}/users`, (req, res, ctx) =>
  res(ctx.json({ ...req.body, id: 0 }), ctx.status(200))
);

const updateUser = rest.put<User>(`${config.api.url}/users/:userId`, (req, res, ctx) => {
  const { userId } = req.params;
  if (Number(userId) > 20) return res(ctx.status(404));
  return res(ctx.json(req.body), ctx.status(200));
});

const userHandlers = [getSingleUser, addUser, updateUser];

export default userHandlers;
