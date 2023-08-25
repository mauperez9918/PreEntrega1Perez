import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../contexts/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch("https://mauperez9918.github.io/PreEntrega2Perez/products.json")
      .then((res) => res.json())
      .then((products) => {
        let filterProduct = products.filter((product) => product.id == id);
        setProduct(...filterProduct);
      });
  }, [id]);

  const { agregarProducto } = useContext(CartContext);

  return <ItemDetail product={product} agregarProducto={agregarProducto} />;
};

export default ItemDetailContainer;
