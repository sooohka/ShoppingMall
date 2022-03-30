import { Box, Table, TableContainer, Tbody, Thead } from "@chakra-ui/react";
import CartTableBodyRow from "@Domains/cart/components/CartTableBodyRow";
import CartTableHeaderRow from "@Domains/cart/components/CartTableHeaderRow";
import { getProducts } from "@Domains/products/api/getproducts";
import { Product } from "@Domains/products/types";
import React, { useEffect, useState } from "react";

function Cart() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  if (!products) return null;
  return (
    <Box>
      <TableContainer>
        <Table>
          <Thead>
            <CartTableHeaderRow titles={["Product", "Amount", "Price"]} />
          </Thead>
          <Tbody>
            {products.map((product) => (
              <CartTableBodyRow key={product.id} product={product} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Cart;
