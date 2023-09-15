import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Badge } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";

export const CartWidget = () => {
  const { carritoStorage } = useContext(CartContext);

  return (
    <Link to={"/cart"}>
      <Button sx={{ color: "white" }}>
        <Badge badgeContent={carritoStorage.length} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </Button>
    </Link>
  );
};
