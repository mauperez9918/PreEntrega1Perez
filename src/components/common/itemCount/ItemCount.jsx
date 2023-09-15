import { Box, Button } from "@mui/material";

const ItemCount = ({
  addProduct,
  stock,
  quantity,
  addQuantity,
  removeQuantity,
  cartStock,
}) => {
  return (
    <Box>
      <Button
        onClick={removeQuantity}
        variant="contained"
        disabled={quantity <= 1}
      >
        -
      </Button>
      <span>{quantity}</span>
      <Button
        onClick={addQuantity}
        variant="contained"
        disabled={quantity >= stock}
      >
        +
      </Button>
      <Button
        onClick={() => addProduct(quantity)}
        variant="contained"
        sx={{ width: "50%", fontSize: "18px" }}
        disabled={cartStock.quantity + quantity > stock}
      >
        Agregar Al Carrito
      </Button>
    </Box>
  );
};

export default ItemCount;
