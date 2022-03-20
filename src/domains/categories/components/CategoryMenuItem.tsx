import { WrapItem } from "@chakra-ui/react";
import { Category } from "@Domains/categories/types";
import React from "react";

type Props = {
  selected: boolean;
  category: Category;
  handleCategoryClick: (category: string) => () => void;
};

function CategoryMenuItem({ category, handleCategoryClick, selected }: Props): JSX.Element {
  if (selected)
    return (
      <WrapItem
        fontWeight="bold"
        onClick={handleCategoryClick(category)}
        _hover={{ cursor: "pointer" }}
      >
        {category}
      </WrapItem>
    );
  return (
    <WrapItem
      onClick={handleCategoryClick(category)}
      _hover={{ cursor: "pointer", opacity: "0.7" }}
    >
      {category}
    </WrapItem>
  );
}

export default CategoryMenuItem;
