import { Grid, Typography } from "@mui/material";
import ProductCard from "../../common/ProductCard/ProductCard";

const ItemList = ({ products, category }) => {
  return (
    <div>
      <Typography variant="h1" sx={{ textAlign: "center", fontSize: "60px" }}>
        {category ? category : "Products"}
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
