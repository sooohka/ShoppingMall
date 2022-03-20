import { Wrap } from "@chakra-ui/react";
import getCategories from "@Domains/categories/api/getCategories";
import CategoryTabItem from "@Domains/categories/components/CategoryMenuItem";
import React, { useEffect, useState } from "react";

type Props = {};

function CategoryMenu({}: Props): JSX.Element {
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories((prev) => prev.concat(res.data));
    });
  }, []);

  const handleCategoryClick = (category: string) => () => {
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
        <CategoryTabItem
          selected={v === currentCategory}
          handleCategoryClick={handleCategoryClick}
          category={v}
          key={v}
        />
      ))}
    </Wrap>
  );
}

export default CategoryMenu;
