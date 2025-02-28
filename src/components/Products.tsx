import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const Recipies = () => {
  const { products, error } = useProducts();

  if (error) return <Text className="text-red-500">{error}</Text>;
  if (products.length === 0) return <Text>Brak dostępnych produktów.</Text>;
  return (
    <>
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding='10px'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.product_name}
            image_url={product.image_small_url}
            brand={product.brands}
            calories={product.nutriments["energy-kcal_serving"]}
            proteins={product.nutriments.proteins_serving}
            carbohydrates={product.nutriments.carbohydrates_serving}
            fat={product.nutriments.fat_serving}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Recipies;
