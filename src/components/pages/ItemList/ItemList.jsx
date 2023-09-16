import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ products, category }) => {
  return (
    <Box sx={{ minHeight: "900px" }}>
      <Typography variant="h1" sx={{ textAlign: "center", fontSize: "60px" }}>
        {category ? category : "Novedades"}
      </Typography>
      <Grid container spacing={4} sx={{ p: 2 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
};

export default ItemList;
