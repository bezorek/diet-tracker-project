interface Props {
  name: string;
  image_url: string;
  proteins: number
  carbohydrates: number
  fat: number
}

const ProductCard = ({ name, image_url, proteins, carbohydrates, fat }: Props) => {
  return (
    <>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-cover"
          src={image_url}
          alt="meal image"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600 mt-2">
            {proteins} {carbohydrates} {fat}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
