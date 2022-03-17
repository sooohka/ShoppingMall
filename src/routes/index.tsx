import MiscRoutes from "@Misc/routes";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function AllRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="app/*" element={<AppRoutes />} />
      <Route path="/*" element={<MiscRoutes />} />
    </Routes>
  );
}

export default AllRoutes;
