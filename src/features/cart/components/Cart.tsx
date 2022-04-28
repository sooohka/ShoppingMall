import { Box, Table, TableContainer, Tbody, Thead } from "@chakra-ui/react";
import CartFooter from "@Src/features/cart/components/CartFooter";
import CartTableBodyRow from "@Src/features/cart/components/CartTableBodyRow";
import CartTableHeaderRow from "@Src/features/cart/components/CartTableHeaderRow";
import { cartStatsState } from "@Src/stores/cart";
import React from "react";
import { useRecoilValue } from "recoil";

function Cart() {
  const cartStats = useRecoilValue(cartStatsState);
  return (
    <>
      <Box h="80vh" overflow="auto">
        <TableContainer>
          <Table>
            <Thead>
              <CartTableHeaderRow titles={["Product", "Amount", "Price"]} />
            </Thead>
            <Tbody>
              {cartStats.products.map((product) => (
                <CartTableBodyRow key={product.id} product={product} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <CartFooter />
    </>
  );
}

export default Cart;
