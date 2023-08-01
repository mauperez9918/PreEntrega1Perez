import { Box, Button, Typography, Toolbar, AppBar } from "@mui/material";
import { CartWidget } from "../../common/CartWidget/CartWidget";

const navItems = ["Inicio", "Categorias"];

const Navbar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar sx={{ backgroundColor: "black" }} component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Tienda
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
          <CartWidget />
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 0.5 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;
