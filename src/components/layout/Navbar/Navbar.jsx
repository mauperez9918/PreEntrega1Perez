import {
  Box,
  Typography,
  Toolbar,
  AppBar,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { CartWidget } from "../../common/CartWidget/CartWidget";
import { useState } from "react";

const navItems = ["Inicio", "Categorias"];
const categorias = ["Gorras", "Pantalones", "Buzos", "Camperas"];

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
              Sports Essentials
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Button sx={{ my: 2, color: "white" }}>Inicio</Button>
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
                {categorias.map((categoria) => (
                  <MenuItem key={categoria} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{categoria}</Typography>
                  </MenuItem>
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
