import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [carritoStorage, setCarritoStorage] = useState([]);

  const clearCart = () => {
    setCarritoStorage([]);
  };

  const totalPrice = () => {
    let total = carritoStorage.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);

    return total;
  };

  const increaseQuantity = (product) => {
    const productIndex = carritoStorage.findIndex(
      (prod) => prod.id == product.id
    );

    let refCarritoStorage = [...carritoStorage];
    if (refCarritoStorage[productIndex].quantity < product.stock) {
      refCarritoStorage[productIndex].quantity += 1;
    }
    setCarritoStorage(refCarritoStorage);
  };

  const decreaseQuantity = (product) => {
    const productIndex = carritoStorage.findIndex(
      (prod) => prod.id == product.id
    );
    let refCarritoStorage = [...carritoStorage];
    if (refCarritoStorage[productIndex].quantity > 1) {
      refCarritoStorage[productIndex].quantity -= 1;
      setCarritoStorage(refCarritoStorage);
    }
  };

  const removeFromCart = (product) => {
    const productIndex = carritoStorage.findIndex(
      (prod) => prod.id == product.id
    );

    let refCarritoStorage = [...carritoStorage];
    refCarritoStorage.splice(productIndex, 1);
    setCarritoStorage(refCarritoStorage);
  };

  const addToCart = (product) => {
    const productIndex = carritoStorage.findIndex(
      (prod) => prod.id == product.id
    );

    if (productIndex !== -1) {
      let refCarritoStorage = [...carritoStorage];

      if (refCarritoStorage[productIndex].quantity < product.stock) {
        refCarritoStorage[productIndex].quantity += product.quantity;

        setCarritoStorage(refCarritoStorage);
      }
    } else {
      setCarritoStorage([...carritoStorage, product]);
    }
  };

  let data = {
    carritoStorage,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    clearCart,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
