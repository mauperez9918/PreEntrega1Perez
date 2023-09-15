import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../contexts/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [cartStock, setCartStock] = useState({});
  const { addToCart, carritoStorage } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://mauperez9918.github.io/PreEntrega2Perez/products.json")
      .then((res) => res.json())
      .then((products) => {
        let filterProduct = products.filter((product) => product.id == id);
        setProduct(...filterProduct);
      });
  }, [id]);

  useEffect(() => {
    let findProduct = carritoStorage.find((item) => item.id == product.id);
    if (findProduct) {
      setCartStock(findProduct);
    }
  }, [carritoStorage, product]);

  const addProduct = (quantity) => {
    let data = { ...product, quantity: quantity };
    addToCart(data);
  };
  return (
    <ItemDetail
      product={product}
      addProduct={addProduct}
      cartStock={cartStock}
    />
  );
};

export default ItemDetailContainer;
