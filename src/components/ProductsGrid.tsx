import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import { ProductQuery } from "@/pages/Dashboard";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
  productQuery: ProductQuery;
}

const ProductsGrid = ({ productQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useProducts(productQuery);

  if (error) return <Text className="text-red-500">{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.products.length, 0) || 0;
  const skeletons = Array.from({length: 20});

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid minChildWidth="290px" gap={5}>
        {isLoading && skeletons.map((_, i) => <ProductCardSkeleton key={i} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.products
              .filter(
                (product) =>
                  product.nutriments?.["energy-kcal"] !== undefined &&
                  product.nutriments?.proteins !== undefined &&
                  product.nutriments?.fat !== undefined &&
                  product.nutriments?.carbohydrates !== undefined
              )
              .map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    name={product.product_name}
                    image_url={product.image_small_url}
                    brand={product.brands}
                    quantity={product.quantity || 'brak'}
                    nutriments={product.nutriments}
                  />
                );
              })}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default ProductsGrid;
