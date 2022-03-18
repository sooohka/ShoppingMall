import MainLayout from "@Components/layout/MainLayout";
import ProductsRoutes from "@Domains/products/routes";
import Profile from "@Domains/profile/routes/Profile";
import NotFound from "@Misc/routes/NotFound";
import React from "react";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="products/*" element={<ProductsRoutes />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}
export default AppRoutes;