import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "@Src/features/profile/routes/Profile";
import Edit from "@Src/features/profile/routes/Edit";

function UsersRoutes(): JSX.Element {
  return (
    <Routes>
      <Route index element={<Profile />} />
      <Route path="edit" element={<Edit />} />
    </Routes>
  );
}

export default UsersRoutes;
