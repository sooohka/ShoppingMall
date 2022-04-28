import { Wrap } from "@chakra-ui/react";
import CategoryMenuItem from "@Src/features/categories/components/CategoryMenuItem";
import { Category } from "@Src/features/categories/types";
import { categoriesState, currentCategoryState } from "@Src/stores/categories";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

type Props = {};

function CategoryMenu({}: Props) {
  const categories = useRecoilValueLoadable(categoriesState);
  const [currentCategory, setCurrentCategory] = useRecoilState(currentCategoryState);
  const handleCategoryClick = (category: Category) => () => {
    setCurrentCategory(category);
  };

  useEffect(() => {
    if (categories.state === "hasValue") {
      setCurrentCategory(categories.contents[0]);
    }
  }, [categories.contents, categories.state, setCurrentCategory]);

  if (categories.state === "loading") {
    return null;
  }
  if (categories.state === "hasError") {
    return null;
  }

  return (
    <Wrap
      spacing="2rem"
      paddingY=".5rem"
      paddingLeft="1rem"
      paddingRight="2rem"
      border="1px solid"
      borderColor="gray.300"
      borderRadius="md"
    >
      {categories.contents.map((v) => (
        <CategoryMenuItem
          key={v.id}
          selected={v.id === currentCategory.id}
          handleCategoryClick={handleCategoryClick}
          category={v}
        />
      ))}
    </Wrap>
  );
}

export default CategoryMenu;
