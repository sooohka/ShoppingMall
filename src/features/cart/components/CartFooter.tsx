import { Box, Text } from "@chakra-ui/react";
import { cartStatsState } from "@Src/stores/cart";
import React from "react";
import { useRecoilValue } from "recoil";

function CartFooter() {
  const cartStats = useRecoilValue(cartStatsState);
  return (
    <Box>
      <Text size="h1">total price: {cartStats.totalPrice}</Text>
    </Box>
  );
}

export default CartFooter;
