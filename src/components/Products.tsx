import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const Recipies = () => {
  const { products, error } = useProducts();

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}

      {products.length === 0 ? (
        <p className="text-grey-500">Brak dostępnych produktów.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.product_name}
              image_url={product.image_url}
              proteins={product.nutriments.proteins_serving}
              carbohydrates={product.nutriments.carbohydrates_serving}
              fat={product.nutriments.fat_serving}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Recipies;
