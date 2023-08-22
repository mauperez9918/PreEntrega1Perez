import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <Grid item xs={2}>
        <Card sx={{ maxWidth: 320 }}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/itemdetail/${product.id}`}
          >
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
                  <span>${product.precio}</span>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
