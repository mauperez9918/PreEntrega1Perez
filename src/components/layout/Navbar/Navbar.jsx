import {
  Box,
  Typography,
  Toolbar,
  AppBar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { CartWidget } from "../../common/CartWidget/CartWidget";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = ["Inicio", "Categorias"];
const categories = ["Gorras", "Pantalones", "Buzos", "Camperas"];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar sx={{ backgroundColor: "black" }} component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Sports Essentials
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Link to="/">
                <Button sx={{ my: 2, color: "white" }}>Inicio</Button>
              </Link>
              <Button
                sx={{ my: 2, color: "white" }}
                onClick={handleOpenUserMenu}
              >
                Categoria
              </Button>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {categories.map((category) => (
                  <Link
                    key={category}
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/category/${category}`}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{category}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <CartWidget />
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ p: 0.5 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
