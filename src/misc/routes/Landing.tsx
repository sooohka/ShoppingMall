import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

function Landing({}: Props): JSX.Element {
  return (
    <div>
      <h1>Landing Page 입니다.</h1>
      <h3 style={{ margin: "1rem", fontWeight: "bold", display: "inline-block" }}>
        <Link to="app/profile">profile</Link>
      </h3>
      <h3 style={{ margin: "1rem", fontWeight: "bold", display: "inline-block" }}>
        <Link to="app/profile/edit">profile/edit</Link>
      </h3>
      <h3 style={{ margin: "1rem", fontWeight: "bold", display: "inline-block" }}>
        <Link to="app/products">products</Link>
      </h3>
      <h3 style={{ margin: "1rem", fontWeight: "bold", display: "inline-block" }}>
        <Link to="app/products/1">product/1</Link>
      </h3>
    </div>
  );
}

export default Landing;
