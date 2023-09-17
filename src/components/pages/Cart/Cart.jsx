import { Box, Button, Grid, Typography } from "@mui/material";
import ProductCart from "../../common/ProductCart/ProductCart";
import { Link } from "react-router-dom";

const Cart = ({ carritoStorage, totalPrice, subtotal, costeDeEnvio }) => {
  return (
    <>
      <Typography
        sx={{ fontSize: 50, fontWeight: "Bold", textAlign: "center" }}
      >
        Carrito
      </Typography>
      <Grid
        container
        sx={{
          width: "90%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            boxShadow: "3",
            width: "50%",
            minHeight: "700px",
            height: "auto",
            mr: "30px",
          }}
        >
          {carritoStorage.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </Grid>

        <Grid
          container
          sx={{
            boxShadow: "3",
            width: "18%",
            height: "700px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "30px",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
              Resumen de compra
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "30px",
              }}
            >
              <Box>
                <Typography>Coste de envio</Typography>
                <Typography>SubTotal</Typography>
                <Typography>Total</Typography>
              </Box>
              <Box>
                <Typography>$ {costeDeEnvio}</Typography>
                <Typography>$ {subtotal}</Typography>
                <Typography>$ {totalPrice}</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Link to="/checkout">
              <Button
                disabled={carritoStorage.length == 0}
                variant="contained"
                sx={{ width: "220px", height: "45px" }}
              >
                Realizar Compra
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
