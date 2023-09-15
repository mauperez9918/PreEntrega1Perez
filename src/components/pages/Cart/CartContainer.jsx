import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../contexts/CartContext";

const CartContainer = () => {
  const { carritoStorage, totalPrice } = useContext(CartContext);

  let total = totalPrice();

  return <Cart carritoStorage={carritoStorage} totalPrice={total} />;
};

export default CartContainer;
