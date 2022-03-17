import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import NotFound from "./NotFound";

type Props = {
  children?: ReactNode;
};

function MiscRoutes({}: Props): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MiscRoutes;
