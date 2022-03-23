import { rest } from "msw";
import config from "@Config";
import { Product } from "@Domains/products/types";
import { GetProductByCategoryDTO, ProductsSearchParams } from "@Domains/products/api/getproducts";
import { AddProductDTO } from "@Domains/products/api/addProduct";
import { UpdateProductDTO } from "@Domains/products/api/updateProduct";
import products from "../../model/products/products.json";

const getProducts = rest.get(`${config.api.url}/products`, (req, res, ctx) => {
  const getProductsByCategory = (categoryId: GetProductByCategoryDTO["categoryId"]) =>
    products.filter((product: Product) => {
      if (product.category.id === categoryId) return true;
      return false;
    });

  const categoryId = Number(req.url.searchParams.get(ProductsSearchParams.CATEGORY));
  if (categoryId) return res(ctx.json(getProductsByCategory(categoryId)), ctx.status(200));

  return res(ctx.json(products), ctx.status(200));
});

const getSingleProduct = rest.get(`${config.api.url}/products/:productId`, (req, res, ctx) => {
  const { productId } = req.params;

  if (Number(productId) > 20) return res(ctx.status(404));
  return res(ctx.json(products[Number(productId)]), ctx.status(200));
});

const addProduct = rest.post<AddProductDTO["body"]>(
  `${config.api.url}/products`,
  (req, res, ctx) => {
    const { title, price, description, image, category } = req.body;
    if (!title || !price || !description || !image || !category)
      return res(ctx.status(400), ctx.json({ message: "request body error" }));
    return res(ctx.json({ id: 0, title, price, description, image, category }), ctx.status(201));
  }
);

const updateProduct = rest.put<UpdateProductDTO["body"]>(
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
