import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const Recipies = () => {
  const { products, error } = useProducts();
  const filteredProducts = products.filter(product => 'nutriments' in product)

  if (error) return <Text className="text-red-500">{error}</Text>;
  if (filteredProducts.length === 0) return <Text>Brak dostępnych produktów.</Text>;
  return (
    <>
      <SimpleGrid minChildWidth='290px'>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.product_name}
            image_url={product.image_small_url}
            brand={product.brands}
            quantity={product.quantity}
            calories={product.nutriments["energy-kcal"]}
            proteins={product.nutriments.proteins}
            carbohydrates={product.nutriments.carbohydrates}
            fat={product.nutriments.fat}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Recipies;
