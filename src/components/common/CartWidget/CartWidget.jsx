import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Badge } from "@mui/material";

export const CartWidget = () => {
  return (
    <Button sx={{ color: "white" }}>
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </Button>
  );
};
