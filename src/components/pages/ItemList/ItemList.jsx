import { Grid, Typography } from "@mui/material";
import ProductCard from "../../common/ProductCard/ProductCard";

const ItemList = ({ products }) => {
  return (
    <div>
      <Typography variant="h1" sx={{ textAlign: "center", fontSize: "60px" }}>
        Productos
      </Typography>
      <Grid container spacing={4} sx={{ p: 2 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
};

export default ItemList;
