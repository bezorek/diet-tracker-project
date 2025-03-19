import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import { ProductQuery } from "@/pages/Dashboard";
import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props{
  productQuery: ProductQuery
}

const ProductsGrid = ({productQuery}: Props) => {
  const {data, error, isLoading, fetchNextPage, hasNextPage} = useProducts(productQuery);

  if (error) return <Text className="text-red-500">{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.products.length, 0) || 0;
  return (
    <InfiniteScroll dataLength={fetchedGamesCount} hasMore={hasNextPage} next={() => fetchNextPage()} loader={<Spinner />}>

      <SimpleGrid minChildWidth='290px' gap={4}>
        {isLoading && <Spinner></Spinner>}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.products.map((product) => (
              <ProductCard
              key={product.id}
              name={product.product_name}
              image_url={product.image_small_url}
              brand={product.brands}
              quantity={product.quantity}
              nutriments={product.nutriments}
            />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>

  );
};

export default ProductsGrid;
