import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setImageUrl(data.images[0]);
      });
  }, []);
  console.log(product);

  const handleImageChange = (image) => {
    setImageUrl(image);
  };
  return (
    <div>
      <div className="container">
        <Link
          to="/"
          className="my-4 text-xl bg-[#FF9900] px-5 py-2.5 flex justify-center items-center w-max rounded-lg text-white border-[#FF9900] border-2 duration-300 hover:bg-white hover:text-[#FF9900] outline-none active:bg-[#FF9900] focus:ring-2 ring-[#FF9900] ring-offset-2"
        >
          Orqaga
        </Link>
        <div>
          <div>
            <div className="w-[403px] h-[400px] p-10 grid place-items-center border-2 border-[#FF9900]">
              <img src={imageUrl} alt="" className="h-full object-contain" />
            </div>
            <div className="flex w-[403px] gap-[1px] overflow-x-auto scrollbar-hide py-2">
              {product?.images.map((image) => (
                <div
                  key={image}
                  onClick={() => handleImageChange(image)}
                  className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] border-2 border-[#FF9900] duration-300 hover:scale-110 cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={image}
                    alt={product.title}
                    className="object-contain"
                    key={image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
