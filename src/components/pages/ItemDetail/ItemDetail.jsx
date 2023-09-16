import { Box, Grid, Typography } from "@mui/material";
import "./ItemDetail.css";
import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";

const ItemDetail = ({ product, addProduct, cartStock }) => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        minHeight: "900px",
      }}
    >
      <Grid
        container
        sx={{
          m: 10,
          boxShadow: 3,
          maxWidth: "900px",
          height: "500px",
          display: "flex",
          borderRadius: "5px",
          p: 3,
        }}
      >
        <Grid item xd={6}>
          <Box>
            <img
              className="productoimg"
              src={product.image}
              alt="Imagen Del Producto"
            ></img>
          </Box>
        </Grid>

        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "350px" }}>
            <Typography
              variant="h1"
              sx={{ fontSize: "28px", fontWeight: "bold" }}
            >
              <span>{product.name}</span>
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", mt: "10px" }}>
              <Typography>
                <span>Marca: {product.brand}</span>
              </Typography>
              <Typography>
                <span>Genero: {product.gender}</span>
              </Typography>
              <Typography>
                <span>Stock: {product.stock}</span>
              </Typography>
            </Box>

            <Typography variant="h3" sx={{ mt: "10px", fontSize: "24px" }}>
              <span>${product.price}</span>
            </Typography>
          </Box>

          <Box
            sx={{
              width: "350px",
              height: 60,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ItemCountContainer
              stock={product.stock}
              addProduct={addProduct}
              cartStock={cartStock}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
