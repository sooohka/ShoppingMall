import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "@Domains/products/routes/Product.[id]";
import Products from "@Domains/products/routes/Products";
import NotFound from "@Misc/routes/NotFound";

function ProductsRoutes(): JSX.Element {
  return (
    <Routes>
      <Route index element={<Products />} />
      <Route path=":productId" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ProductsRoutes;
