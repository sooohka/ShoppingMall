import { Box, HStack, Icon, IconButton, Image, Td, Text, Tr } from "@chakra-ui/react";
import HorizontalNumberInput from "@Components/Elements/HorizontalNumberInput";
import { Product } from "@Src/features/products/types";
import { cartItemsState } from "@Src/stores/cart";
import React from "react";
import { HiX } from "react-icons/hi";
import { useRecoilState, useResetRecoilState } from "recoil";

type Props = {
  product: Product;
};

function CartTableBodyRow(props: Props) {
  const {
    product: { id },
  } = props;
  const [cart, setCart] = useRecoilState(cartItemsState(id));
  const s = useResetRecoilState(cartItemsState(id));
  const { product } = props;

  // const s = useRecoilCallback(
  //   ({ set }) =>
  //     () => {
  //       set(cartIdsState, (prev) => prev.filter((v) => v !== id));
  //     },
  //   []
  // );

  const handleChange = (valueAsString: string, valueAsNumber: number) => {
    setCart((prev) => ({ ...prev, count: valueAsNumber }));
  };

  const handleXIconClick = () => {
    s();
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
      <Td pos="relative">
        <Text size="lg" fontWeight="bold">
          {`$${(product.price * cart.count).toFixed(2)}`}
        </Text>
        <IconButton
          onClick={handleXIconClick}
          pos="absolute"
          top={0}
          right={0}
          bg="transparent"
          aria-label="x-icon"
          icon={<Icon as={HiX} />}
        />
      </Td>
    </Tr>
  );
}

export default CartTableBodyRow;
