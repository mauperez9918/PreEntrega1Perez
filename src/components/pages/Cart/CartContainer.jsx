import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../contexts/CartContext";

const CartContainer = () => {
  const { carritoStorage } = useContext(CartContext);

  return <Cart carritoStorage={carritoStorage} />;
};

export default CartContainer;
