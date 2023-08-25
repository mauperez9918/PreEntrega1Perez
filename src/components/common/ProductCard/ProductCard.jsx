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
                height="300px"
                image={product.image}
                alt="Imagen del producto"
              />
              <CardContent>
                <Typography
                  sx={{ fontSize: 15, height: "50px" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  <span>{product.name}</span>
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
                  <span>${product.price}</span>
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
