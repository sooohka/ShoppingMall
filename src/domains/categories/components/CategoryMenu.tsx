import { Wrap } from "@chakra-ui/react";
import getCategories from "@Domains/categories/api/getCategories";
import CategoryMenuItem from "@Domains/categories/components/CategoryMenuItem";
import { Category } from "@Domains/categories/types";
import React, { useEffect, useState } from "react";

type Props = {};

function CategoryMenu({}: Props): JSX.Element {
  const [categories, setCategories] = useState<Category[]>([{ id: 0, name: "All" }]);
  const [currentCategory, setCurrentCategory] = useState<Category>(categories[0]);

  useEffect(() => {
    // TODO: 카테고리별로 나누는 로직 작성
    // TODO: 로직 훅으로 빼기
    getCategories().then((res) => {
      setCategories((prev) => prev.concat(res.data));
    });
  }, []);

  const handleCategoryClick = (category: Category) => () => {
    setCurrentCategory(category);
  };

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
      {categories.map((v) => (
        <CategoryMenuItem
          key={v.id}
          selected={v === currentCategory}
          handleCategoryClick={handleCategoryClick}
          category={v}
        />
      ))}
    </Wrap>
  );
}

export default CategoryMenu;
