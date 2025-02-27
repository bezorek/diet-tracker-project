
const ProductCard = () => {
  return (
    <>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-cover"
          src="meal"
          alt="meal image"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Nazwa Przepisu
          </h2>
          <p className="text-gray-600 mt-2">
            🍽️ Ilość porcji: <span className="font-semibold">4</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
