import { rest } from "msw";
import config from "@Config/index";
import categories from "../../model/categories/categories.json";

const getCategories = rest.get(`${config.api.url}/products/categories`, (req, res, ctx) =>
  res(ctx.json(categories), ctx.status(200))
);

const categoryHandlers = [getCategories];

export default categoryHandlers;
