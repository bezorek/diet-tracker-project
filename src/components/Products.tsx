import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import { ProductQuery } from "@/pages/Dashboard";

interface Props{
  productQuery: ProductQuery
}

const Products = ({productQuery}: Props) => {
  const { products, error } = useProducts(productQuery);

  if (error) return <Text className="text-red-500">{error}</Text>;
  return (
    <>
      <SimpleGrid minChildWidth='290px'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.product_name}
            image_url={product.image_small_url}
            brand={product.brands}
            quantity={product.quantity}
            nutriments={product.nutriments}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Products;
