import { Box, Image, VStack } from "@chakra-ui/react";
import getSingleProduct from "@Domains/products/api/getSingleProduct";
import ProductDetail from "@Domains/products/components/ProductDetail";
import * as Type from "@Domains/products/types";
import useBreakPoints from "@Hooks/layout/useBreakpoints";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const [data, setData] = useState<Type.Product>();
  const { xs, sm, md } = useBreakPoints();
  const { productId } = useParams();

  useEffect(() => {
    // TODO: 하나의 프로덕트 가져오는 로직작성
    // TODO: 로직 훅으로 빼기
    (async function () {
      if (!productId) return;
      const res = await getSingleProduct({ productId });
      setData(res.data);
    })();
  }, [productId]);

  if (!data) return <div>notfound</div>;
  if (md)
    return (
      <VStack px={["4", "", "", "14", "36"]} w="100%" minW={["", "", "50rem"]} py="10">
        <Box d="flex" gap="10">
          <Image w="50%" src={data?.image} />
          <ProductDetail product={data} width="50%" />
        </Box>
      </VStack>
    );
  return (
    <VStack w="100%" px="2" py="10">
      <Image w="100%" src={data?.image} />
      <ProductDetail product={data} width="100%" />
    </VStack>
  );
}

export default Product;
