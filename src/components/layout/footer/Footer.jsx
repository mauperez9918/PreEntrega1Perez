import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          width: "100%",
          maxHeight: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <Typography style={{ color: "white" }}>
          &copy; 2023 SportEssentials. Todos los derechos reservados.
        </Typography>

        <Typography style={{ color: "white", fontSize: "30px" }}>
          SportEssentials
        </Typography>

        <Box>
          <a href="https://www.instagram.com/" className="iconos-redes">
            <InstagramIcon style={{ color: "white", fontSize: "40px" }} />
          </a>
          <a href="https://www.facebook.com/" className="iconos-redes">
            <FacebookIcon style={{ color: "white", fontSize: "40px" }} />
          </a>
          <a href="https://twitter.com/" className="iconos-redes">
            <TwitterIcon style={{ color: "white", fontSize: "40px" }} />
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
