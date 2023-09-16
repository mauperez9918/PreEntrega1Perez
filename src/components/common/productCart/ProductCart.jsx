import { Box, Button, Grid, Typography } from "@mui/material";
import "./productCart.css";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductCart = ({ product }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  return (
    <Grid key={product.id} item>
      <Box
        sx={{
          display: "flex",
          boxShadow: 1,
          m: "20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          className="product-cart-img"
          src={product.image}
          alt="Product Image"
        />

        <Box
          sx={{
            width: "600px",
            display: "flex",
            justifyContent: "space-between",
            padding: 3,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              style={{ marginBottom: "10px", fontSize: "24px" }}
            >
              {product.name}
            </Typography>
            <Typography>${product.price}</Typography>
            <Typography>Marca: {product.brand}</Typography>
            <Typography>Genero: {product.gender}</Typography>
            <Typography>Cantidad: {product.quantity}</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              onClick={() => increaseQuantity(product)}
              variant="contained"
              sx={{ width: "auto", height: "40px", margin: "5px" }}
              disabled={product.quantity >= product.stock}
            >
              +
            </Button>

            <Button
              onClick={() => removeFromCart(product)}
              variant="contained"
              sx={{ width: "auto", height: "40px", margin: "5px" }}
            >
              <DeleteIcon />
            </Button>

            <Button
              onClick={() => decreaseQuantity(product)}
              variant="contained"
              sx={{ width: "auto", height: "40px", margin: "5px" }}
              disabled={product.quantity <= 1}
            >
              -
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProductCart;
