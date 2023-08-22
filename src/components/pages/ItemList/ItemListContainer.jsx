import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://mauperez9918.github.io/PreEntrega1Perez/products.json")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return <ItemList products={products} />;
};

export default ItemListContainer;
