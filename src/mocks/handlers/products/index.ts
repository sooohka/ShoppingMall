import { rest } from "msw";
import config from "@Config/index";
import { Product, ProductAddForm, ProductsSearchParams } from "@Domains/products/types";
import products from "../../model/products/products.json";

const getProducts = rest.get(`${config.api.url}/products`, (req, res, ctx) => {
  const getProductsByCategory = (_category: Product["category"]) =>
    products.filter((product: Product) => {
      if (product.category === _category) return true;
      return false;
    });

  const category = req.url.searchParams.get(ProductsSearchParams.CATEGORY);
  if (category) return res(ctx.json(getProductsByCategory(category)), ctx.status(200));

  return res(ctx.json(products), ctx.status(200));
});

const getSingleProduct = rest.get(`${config.api.url}/products/:productId`, (req, res, ctx) => {
  const { productId } = req.params;

  if (Number(productId) > 20) return res(ctx.status(404));
  return res(ctx.json(products[Number(productId)]), ctx.status(200));
});

const addProduct = rest.post<ProductAddForm>(`${config.api.url}/products`, (req, res, ctx) => {
  const { title, price, description, image, category } = req.body;
  if (!title || !price || !description || !image || !category) return res(ctx.status(400));
  return res(ctx.json({ id: 0, title, price, description, image, category }), ctx.status(201));
});

const updateProduct = rest.put<ProductAddForm>(
  `${config.api.url}/products/:productId`,
  (req, res, ctx) => {
    const { productId } = req.params;
    const { title, price, description, image, category } = req.body;
    if (Number(productId) > 20) return res(ctx.status(404), ctx.body("존재하지 않는 id"));
    if (!title || !price || !description || !image || !category) return res(ctx.status(400));
    return res(
      ctx.json({ id: productId, title, price, description, image, category }),
      ctx.status(200)
    );
  }
);

const deleteProduct = rest.delete(`${config.api.url}/products/:productId`, (req, res, ctx) => {
  const { productId } = req.params;
  if (Number(productId) > 20) return res(ctx.status(404), ctx.body("존재하지 않는 id"));
  return res(ctx.status(200));
});

const productHandlers = [getProducts, getSingleProduct, addProduct, updateProduct, deleteProduct];

export default productHandlers;
