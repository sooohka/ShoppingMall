import React, { ReactNode, useEffect, useState } from "react";
import { Wrap } from "@chakra-ui/react";
import ProductListItem from "@Domains/products/components/ProductListItem";
import { Product } from "@Domains/products/types";
import getProducts from "@Domains/products/api/getproducts";

type Props = {
  children?: ReactNode;
};

function ProductList({}: Props): JSX.Element {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    (async function () {
      const res = await getProducts();
      setData(res.data);
    })();
  }, []);

  if (!data) return <div />;
  return (
    <Wrap minW="60rem" spacing={0} p="2rem">
      {data.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </Wrap>
  );
}

export default ProductList;
