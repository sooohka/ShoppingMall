import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function AllRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="app/*" element={<AppRoutes />} />
      <Route path="*" element={<Navigate to="app" />} />
    </Routes>
  );
}

export default AllRoutes;
