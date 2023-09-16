import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../contexts/CartContext";

const CartContainer = () => {
  const { carritoStorage, totalPrice } = useContext(CartContext);

  let costeDeEnvio = 15;
  let subtotal = totalPrice();
  let total = subtotal + costeDeEnvio;

  return (
    <Cart
      carritoStorage={carritoStorage}
      totalPrice={total}
      subtotal={subtotal}
      costeDeEnvio={costeDeEnvio}
    />
  );
};

export default CartContainer;
