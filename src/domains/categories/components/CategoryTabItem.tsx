import React from "react";
import { Category } from "@Domains/categories/types";
import { WrapItem } from "@chakra-ui/react";

type Props = {
  category: Category;
};

function CategoryTabItem({ category }: Props): JSX.Element {
  return <WrapItem _hover={{ cursor: "pointer", opacity: "0.5" }}>{category}</WrapItem>;
}

export default CategoryTabItem;
