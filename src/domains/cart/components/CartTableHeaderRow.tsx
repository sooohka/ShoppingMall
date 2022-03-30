import { Th, Tr } from "@chakra-ui/react";
import React from "react";

type Props = {
  titles: string[];
};

function CartTableHeaderRow(props: Props) {
  const { titles } = props;
  return (
    <Tr>
      {titles.map((title) => (
        <Th key={title}>{title}</Th>
      ))}
    </Tr>
  );
}

export default CartTableHeaderRow;
