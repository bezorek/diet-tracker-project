import useProducts from "../hooks/useProducts";


const Recipies = () => {
  const {products, error} = useProducts();

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.generic_name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Recipies;
