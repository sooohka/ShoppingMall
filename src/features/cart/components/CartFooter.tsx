import { Td, Text, Tfoot, Tr } from "@chakra-ui/react";
import { cartStatsState } from "@Src/stores/cart";
import React from "react";
import { useRecoilValue } from "recoil";

function CartFooter() {
  const cartStats = useRecoilValue(cartStatsState);
  return (
    <Tfoot>
      <Tr>
        <Td>
          <Text maxW="30rem" isTruncated fontWeight="bold">
            {cartStats.products.reduce((p, c) => p + c.title, "")}{" "}
          </Text>
        </Td>
        <Td>
          <Text>{cartStats.products.reduce((p, c) => p + c.count, 0)} </Text>
        </Td>
        <Td>
          <Text>{cartStats.totalPrice.toFixed(2)} </Text>
        </Td>
      </Tr>
    </Tfoot>
  );
}

export default CartFooter;
