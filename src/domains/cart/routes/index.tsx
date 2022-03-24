import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";

function CartRoutes() {
  return (
    <Routes>
      <Route index element={<Cart />} />
    </Routes>
  );
}

export default CartRoutes;
