import React, { ReactNode, useEffect, useState } from "react";
import { Box, Wrap } from "@chakra-ui/react";
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
    <Box>
      <Wrap border="1px solid gray" spacing={0}>
        {data.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </Wrap>
    </Box>
  );
}

export default ProductList;
