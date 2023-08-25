import { Box } from "@mui/material";

const Cart = ({ carritoStorage }) => {
  console.log(carritoStorage);
  return (
    <Box>
      {carritoStorage.map((product) => (
        <p key={product.id}>{product.nombre}</p>
      ))}
    </Box>
  );
};

export default Cart;
