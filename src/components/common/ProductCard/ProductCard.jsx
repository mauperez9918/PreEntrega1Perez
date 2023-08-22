import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <>
      <Grid item xs={2}>
        <Card sx={{ maxWidth: 320 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={product.imagen}
              alt="Product Image"
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 15, height: "50px" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                <span>{product.nombre}</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  height: "20px",
                  fontWeight: "bold",
                  fontFamily: "Monospace",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                <span>{product.precio}</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained">Ver Producto</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
