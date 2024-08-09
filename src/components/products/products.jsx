import { useEffect, useState } from "react";
import Product from "../product/product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
    console.log(products);
  }, []);
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <section className="mt-[38px]">
      <div className="container flex justify-center flex-wrap gap-4">
        {products.length > 0
          ? products.map((product) => (
              <Product
                key={product.id}
                handleDelete={handleDelete}
                {...product}
              />
            ))
          : null}
      </div>
    </section>
  );
};

export default Products;
