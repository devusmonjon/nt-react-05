import { useEffect, useState } from "react";
import Product from "../product/product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);
  const [loading, setLoading] = useState(false);
  const [maxLimit, setMaxLimit] = useState(0);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products/${
        category ? `category/${category}` : ""
      }?limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setMaxLimit(data.total);
      })
      .finally(() => setLoading(false));
    console.log(products);
  }, [limit, category]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  const handleLoadMore = () => {
    setLoading(true);
    setLimit((prev) => (prev < maxLimit ? prev + 4 : prev));
  };

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));
  }, []);
  // when the user scrolls down auto load more when hit the bottom
  useEffect(() => {
    if (scroll + window.innerHeight >= document.body.scrollHeight) {
      handleLoadMore();
    }
  }, [scroll]);
  return (
    <section className="mt-[38px] pb-[200px]">
      <div className="container">
        <ul className="flex gap-4 text-[18px] overflow-x-auto scrollbar-hide py-4 px-4 scroll-snap">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                className="whitespace-nowrap py-1 px-4 rounded-[26px] bg-[#FF9900] border-[#FF9900] border-2 text-white duration-300 hover:bg-white hover:text-[#FF9900] outline-none active:bg-[#FF9900] focus:ring-2 ring-[#FF9900] ring-offset-2"
                onClick={() => {
                  setCategory(cat);
                }}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
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
          disabled={maxLimit <= limit || loading}
          className="w-full bg-green-500 text-white font-bold py-2 mt-16 disabled:bg-gray-300 duration-300"
          onClick={() => {
            handleLoadMore();
          }}
        >
          {maxLimit > limit
            ? loading
              ? "Загрузка..."
              : `Загрузить еще (${maxLimit - limit})`
            : "Загружено"}
        </button>
      </div>
    </section>
  );
};

export default Products;
