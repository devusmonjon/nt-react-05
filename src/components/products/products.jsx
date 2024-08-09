import { useEffect, useState } from "react";
import Product from "../product/product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);
  const [loading, setLoading] = useState(false);
  const [maxLimit, setMaxLimit] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setMaxLimit(data.total);
      })
      .finally(() => setLoading(false));
    console.log(products);
  }, [limit]);
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  const handleLoadMore = () => {
    setLimit((prev) => (prev < maxLimit ? prev + 4 : prev));
  };
  return (
    <section className="mt-[38px] pb-[100px]">
      <div className="container">
        <div className="flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <Product
                key={product.id}
                handleDelete={handleDelete}
                {...product}
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <button
          className="w-full bg-green-500 text-white font-bold py-2 mt-16"
          onClick={() => {
            setLoading(true);
            handleLoadMore();
          }}
        >
          {loading ? "Загрузка..." : `Загрузить еще ${maxLimit - limit}`}
        </button>
      </div>
    </section>
  );
};

export default Products;
