import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

function Landing({ children }: Props): JSX.Element {
  return (
    <div>
      <h1>Landing Page 입니다.</h1>
      <h3
        style={{ margin: "1rem", fontWeight: "bold", display: "inline-block" }}
      >
        <Link to="profile">profile</Link>
      </h3>
      <h3
        style={{ margin: "1rem", fontWeight: "bold", display: "inline-block" }}
      >
        <Link to="profile/edit">profile/edit</Link>
      </h3>
      <h3
        style={{ margin: "1rem", fontWeight: "bold", display: "inline-block" }}
      >
        <Link to="products">products</Link>
      </h3>
      <h3
        style={{ margin: "1rem", fontWeight: "bold", display: "inline-block" }}
      >
        <Link to="products/1">product/1</Link>
      </h3>
    </div>
  );
}

export default Landing;
