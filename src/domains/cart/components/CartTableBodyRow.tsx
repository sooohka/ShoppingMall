import { Box, HStack, Image, Td, Text, Tr } from "@chakra-ui/react";
import HorizontalNumberInput from "@Components/Elements/HorizontalNumberInput";
import { Product } from "@Domains/products/types";
import React, { useState } from "react";

type Props = {
  product: Product;
};

function CartTableBodyRow(props: Props) {
  const [amount, setAmount] = useState(1);
  const { product } = props;

  const handleChange = (valueAsString: string, valueAsNumber: number) => {
    setAmount(valueAsNumber);
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
        <HorizontalNumberInput value={amount} setValue={handleChange} width="150px" />
      </Td>
      <Td>
        <Text size="lg" fontWeight="bold">
          {`$${product.price * amount}`}
        </Text>
      </Td>
    </Tr>
  );
}

export default CartTableBodyRow;
