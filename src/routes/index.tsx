import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsRoutes from "@Domains/products/routes";
import Profile from "@Domains/profile/routes/Profile";
import MiscRoutes from "../misc/routes";

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="products/*" element={<ProductsRoutes />} />
      <Route path="profile/*" element={<Profile />} />
      <Route path="/*" element={<MiscRoutes />} />
    </Routes>
  );
}

export default AppRoutes;
