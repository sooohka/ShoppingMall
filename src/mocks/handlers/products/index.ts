import { rest } from "msw";
import config from "@Config/index";
import products from "../../model/product/products.json";

type Product = {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

const getProducts = rest.get(`${config.api.url}/products`, (req, res, ctx) => res(ctx.json(products), ctx.status(200)));

const getSingleProduct = rest.get(`${config.api.url}/products/:productId`, (req, res, ctx) => {
  const { productId } = req.params;

  if (Number(productId) > 20) res(ctx.status(404));
  res(ctx.json(products[Number(productId)]), ctx.status(200));
});

const addProduct = rest.post<Product>(`${config.api.url}/products`, (req, res, ctx) => {
  const { title, price, description, image, category } = req.body;
  if (!title || !price || !description || !image || !category) res(ctx.status(400));
  res(ctx.json({ id: 0, title, price, description, image, category }), ctx.status(201));
});

const updateProduct = rest.put<Product>(`${config.api.url}/products/:productId`, (req, res, ctx) => {
  const { productId } = req.params;
  const { title, price, description, image, category } = req.body;
  if (Number(productId) > 20) res(ctx.status(404), ctx.body("존재하지 않는 id"));
  if (!title || !price || !description || !image || !category) res(ctx.status(400));
  res(ctx.json({ id: productId, title, price, description, image, category }), ctx.status(200));
});

const deleteProduct = rest.delete(`${config.api.url}/products/:productId`, (req, res, ctx) => {
  const { productId } = req.params;
  if (Number(productId) > 20) res(ctx.status(404), ctx.body("존재하지 않는 id"));
  res(ctx.status(200));
});

const productHandlers = [getProducts, getSingleProduct, addProduct, updateProduct, deleteProduct];

export default productHandlers;
