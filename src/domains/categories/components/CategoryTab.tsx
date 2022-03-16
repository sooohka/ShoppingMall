import { Wrap } from "@chakra-ui/react";
import getCategories from "@Domains/categories/api/getCategories";
import CategoryTabItem from "@Domains/categories/components/CategoryTabItem";
import React, { useEffect, useState } from "react";

type Props = {};

function CategoryTab({}: Props): JSX.Element {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <Wrap w="80%" spacing="2rem">
      {categories.map((v) => (
        <CategoryTabItem category={v} key={v} />
      ))}
    </Wrap>
  );
}

export default CategoryTab;
