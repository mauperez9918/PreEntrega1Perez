import { useState } from "react";
import ItemCount from "./itemCount";

const ItemCountContainer = ({ addProduct, stock, cartStock }) => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeQuantity = () => {
    setQuantity(quantity - 1);
  };
  return (
    <ItemCount
      addProduct={addProduct}
      stock={stock}
      quantity={quantity}
      addQuantity={addQuantity}
      removeQuantity={removeQuantity}
      cartStock={cartStock}
    />
  );
};

export default ItemCountContainer;
