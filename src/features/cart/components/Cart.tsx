import { Box, Table, TableContainer, Tbody, Text, Thead } from "@chakra-ui/react";
import CartFooter from "@Src/features/cart/components/CartFooter";
import CartTableBodyRow from "@Src/features/cart/components/CartTableBodyRow";
import CartTableHeaderRow from "@Src/features/cart/components/CartTableHeaderRow";
import { cartStatsState } from "@Src/stores/cart";
import React from "react";
import { useRecoilValueLoadable } from "recoil";

function Cart() {
  const cartStats = useRecoilValueLoadable(cartStatsState);
  if (cartStats.state !== "hasValue") {
    return (
      <Box>
        <Text>NO Products</Text>
      </Box>
    );
  }
  if (cartStats.contents.products.length === 0) {
    return (
      <Box>
        <Text>NO Products</Text>
      </Box>
    );
  }
  return (
    <Box h="80vh" overflow="auto">
      <TableContainer>
        <Table>
          <Thead>
            <CartTableHeaderRow titles={["Product", "Amount", "Price"]} />
          </Thead>
          <Tbody>
            {cartStats.contents.products.map((product) => (
              <CartTableBodyRow key={product.id} product={product} />
            ))}
          </Tbody>

          <CartFooter />
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Cart;
