import { Box, Button, Grid, Typography } from "@mui/material";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
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
          m: 10,
          boxShadow: 3,
          maxWidth: "60%",
          display: "flex",
          borderRadius: "5px",
          p: 6,
        }}
      >
        <Grid item xd={6}>
          <Box sx={{ width: "500px" }}>
            <img
              className="productoimg"
              src={product.imagen}
              alt="Imagen Del Producto"
            ></img>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "28px" }}>
              <span>{product.nombre}</span>
            </Typography>
            <Typography sx={{ fontWeightl: "light", fontSize: "22px", mt: 4 }}>
              <span>${product.precio}</span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>
              <span>MARCA: ---</span>
            </Typography>
            <Typography>
              <span>GÉNERO: Unisex</span>
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: 60,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" sx={{ width: "50%", fontSize: "18px" }}>
              Comprar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
