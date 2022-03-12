import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "@Domains/products/routes/Product.[id]";
import Products from "@Domains/products/routes/Products";

function ProductsRoutes(): JSX.Element {
  return (
    <Routes>
      <Route index element={<Products />} />
      <Route path=":productId" element={<Product />} />
    </Routes>
  );
}

export default ProductsRoutes;
