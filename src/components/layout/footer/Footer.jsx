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
          justifyContent: "space-evenly",
          alignItems: "center",
          mt: "20px",
          padding: "30px",
        }}
      >
        <Typography style={{ color: "white", width: "32%" }}>
          &copy; 2023 SportEssentials. Todos los derechos reservados.
        </Typography>

        <Typography
          style={{
            color: "white",
            fontSize: "30px",
            width: "32%",
            textAlign: "center",
          }}
        >
          SportEssentials
        </Typography>

        <Box sx={{ width: "32%", textAlign: "right" }}>
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
