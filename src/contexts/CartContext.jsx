import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [carritoStorage, setCarritoStorage] = useState([]);

  const agregarProducto = (product) => {
    setCarritoStorage([...carritoStorage, product]);
  };

  let data = {
    carritoStorage,
    agregarProducto,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
