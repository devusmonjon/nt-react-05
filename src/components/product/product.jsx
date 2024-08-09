import { Link } from "react-router-dom";

const Product = ({ handleDelete, id, images, title, description, price }) => {
  return (
    <div className="mx-4 sm:mx-0 flex flex-col rounded-[26px] overflow-hiddens shadow-lg">
      <Link
        to={`/products/${id}`}
        className="w-full h-[300px] px-4 flex justify-center items-center overflow-hidden"
      >
        <img
          src={images[0]}
          alt={title}
          className="h-full object-contain duration-300 hover:scale-105"
        />
      </Link>
      <div className="px-4 py-2">
        <Link to={`/products/${id}`}>
          <h3 className="text-lg font-bold" title={title}>
            {title.slice(0, 20)} {title.length > 20 ? "..." : ""}
          </h3>
        </Link>
        <p className="text-sm text-gray-500">{description.slice(0, 70)} ...</p>
        <p className="text-lg font-bold">${price} USD</p>
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
