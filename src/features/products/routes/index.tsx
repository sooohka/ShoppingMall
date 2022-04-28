import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "@Src/features/products/routes/Product.[id]";
import Products from "@Src/features/products/routes/Products";

function ProductsRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path=":productId" element={<Product />} />
      <Route path="*" element={<Products />} />
    </Routes>
  );
}

export default ProductsRoutes;
