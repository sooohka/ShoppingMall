import { Box, HStack, Image, Td, Text, Tr } from "@chakra-ui/react";
import HorizontalNumberInput from "@Components/Elements/HorizontalNumberInput";
import { Product } from "@Src/features/products/types";
import { cartItemsState } from "@Src/stores/cart";
import React from "react";
import { useRecoilState } from "recoil";

type Props = {
  product: Product;
};

function CartTableBodyRow(props: Props) {
  const {
    product: { id },
  } = props;
  const [cart, setCart] = useRecoilState(cartItemsState(id));
  const { product } = props;

  const handleChange = (valueAsString: string, valueAsNumber: number) => {
    setCart((prev) => ({ ...prev, count: valueAsNumber }));
  };
  return (
    <Tr key={product.id}>
      <Td>
        <HStack gap={10}>
          <Image height="100px" width="100px" src={product.image} />
          <Box>
            <Text>{product.category.name}</Text>
            <Text maxW="20rem" isTruncated fontWeight="bold">
              {product.title}
            </Text>
            <Text>{product.price}</Text>
          </Box>
        </HStack>
      </Td>
      <Td>
        <HorizontalNumberInput value={cart.count} setValue={handleChange} width="150px" />
      </Td>
      <Td>
        <Text size="lg" fontWeight="bold">
          {`$${product.price * cart.count}`}
        </Text>
      </Td>
    </Tr>
  );
}

export default CartTableBodyRow;
