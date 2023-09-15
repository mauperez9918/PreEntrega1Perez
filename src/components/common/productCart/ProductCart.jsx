import { Box, Button, Grid, Typography } from "@mui/material";
import "./ProductCart.css";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductCart = ({ product }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  return (
    <Grid key={product.id} item>
      <Box sx={{ display: "flex", boxShadow: 1, m: "20px" }}>
        <img
          className="product-cart-img"
          src={product.image}
          alt="Product Image"
        />

        <Typography>{product.name}</Typography>
        <Typography>${product.price}</Typography>
        <Typography>{product.brand}</Typography>
        <Typography>{product.gender}</Typography>
        <Typography>{product.quantity}</Typography>
        <Button
          onClick={() => decreaseQuantity(product)}
          variant="contained"
          sx={{ width: "auto", height: "40px" }}
          disabled={product.quantity <= 1}
        >
          -
        </Button>
        <Button
          onClick={() => removeFromCart(product)}
          variant="contained"
          sx={{ width: "auto", height: "40px" }}
        >
          <DeleteIcon />
        </Button>
        <Button
          onClick={() => increaseQuantity(product)}
          variant="contained"
          sx={{ width: "auto", height: "40px" }}
          disabled={product.quantity >= product.stock}
        >
          +
        </Button>
      </Box>
    </Grid>
  );
};

export default ProductCart;
