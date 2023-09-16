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
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Button
          onClick={removeQuantity}
          variant="contained"
          disabled={quantity <= 1}
        >
          -
        </Button>
        <span style={{ fontSize: "18px", margin: "10px" }}>{quantity}</span>
        <Button
          onClick={addQuantity}
          variant="contained"
          disabled={quantity >= stock}
        >
          +
        </Button>
      </Box>
      <Button
        onClick={() => addProduct(quantity)}
        variant="contained"
        sx={{ width: "40%", fontSize: "14px" }}
        disabled={cartStock.quantity + quantity > stock}
      >
        Agregar Al Carrito
      </Button>
    </Box>
  );
};

export default ItemCount;
