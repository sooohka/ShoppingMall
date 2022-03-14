import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "@Domains/profile/routes/Profile";
import Edit from "@Domains/profile/routes/Edit";

function UsersRoutes(): JSX.Element {
  return (
    <Routes>
      <Route index element={<Profile />} />
      <Route path="edit" element={<Edit />} />
    </Routes>
  );
}

export default UsersRoutes;
