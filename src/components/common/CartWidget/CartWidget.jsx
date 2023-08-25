import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Badge } from "@mui/material";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link to={"/cart"}>
      <Button sx={{ color: "white" }}>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </Button>
    </Link>
  );
};
