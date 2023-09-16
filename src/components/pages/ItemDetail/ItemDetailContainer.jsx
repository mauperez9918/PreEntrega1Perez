import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../contexts/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [cartStock, setCartStock] = useState({});
  const { addToCart, carritoStorage } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const item = doc(db, "products", id);
    getDoc(item).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
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
