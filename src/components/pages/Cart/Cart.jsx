import { Box, Button, Grid, Typography } from "@mui/material";
import ProductCart from "../../common/productCart/ProductCart";

const Cart = ({ carritoStorage, totalPrice }) => {
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
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
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
            width: "15%",
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
                <Typography>Total</Typography>
              </Box>
              <Box>
                <Typography>15 USD</Typography>
                <Typography>{totalPrice}</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Button variant="contained" sx={{ width: "220px", height: "45px" }}>
              Realizar Compra
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
