import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch("https://mauperez9918.github.io/PreEntrega1Perez/products.json")
      .then((res) => res.json())
      .then((products) => {
        let filterProduct = products.filter((product) => product.id == id);
        setProduct(...filterProduct);
      });
  }, [id]);
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
