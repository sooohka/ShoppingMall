import MainLayout from "@Components/layout/MainLayout";
import CartRoutes from "@Domains/cart/routes";
import EventList from "@Domains/events/components/EventList";
import ProductsRoutes from "@Domains/products/routes";
import Profile from "@Domains/profile/routes/Profile";
import React from "react";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="cart/*" element={<CartRoutes />} />
        <Route path="products/*" element={<ProductsRoutes />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="*" element={<EventList />} />
      </Routes>
    </MainLayout>
  );
}
export default AppRoutes;
