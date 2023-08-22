import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();
  let filterByCategory = "";

  useEffect(() => {
    fetch("https://mauperez9918.github.io/PreEntrega2Perez/products.json")
      .then((res) => res.json())
      .then((products) => {
        filterByCategory = products.filter(
          (product) => product.categoria == categoryName
        );
        categoryName ? setProducts(filterByCategory) : setProducts(products);
      });
  }, [categoryName]);

  return <ItemList products={products} />;
};

export default ItemListContainer;
