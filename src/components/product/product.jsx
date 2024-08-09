const Product = ({ handleDelete, id, images, title, description, price }) => {
  return (
    <div className="flex flex-col w-[300px]">
      <div className="w-full h-[300px] px-4">
        <img src={images[0]} alt={title} className="h-full object-contain" />
      </div>
      <div className="px-4 py-2">
        <h3 className="text-lg font-bold">
          {title.slice(0, 20)} {title.length > 20 ? "..." : ""}
        </h3>
        <p className="text-sm text-gray-500">{description.slice(0, 70)} ...</p>
        <p className="text-lg font-bold">{price} сум</p>
      </div>
      <button
        onClick={() => handleDelete(id)}
        className="w-full bg-red-500 text-white font-bold py-2"
      >
        Удалить
      </button>
    </div>
  );
};

export default Product;
