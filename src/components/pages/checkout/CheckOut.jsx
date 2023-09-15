import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const CheckOut = () => {
  return (
    <>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", mt: "15px" }}
      >
        <Typography
          style={{
            textAlign: "center",
            width: "100%",
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          CheckOut
        </Typography>
        <Grid
          container
          sx={{
            boxShadow: "3",
            width: "50%",
            height: "700px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px",
            mt: "15px",
          }}
        >
          <Typography style={{ fontSize: "30px" }}>
            Ingrese sus datos
          </Typography>
          <TextField
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Nombre Completo"
            variant="standard"
          />
          <TextField
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Email"
            variant="standard"
          />{" "}
          <TextField
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Direccion"
            variant="standard"
          />{" "}
          <TextField
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Telefono"
            variant="standard"
          />
          <TextField
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Ciudad"
            variant="standard"
          />
          <TextField
            sx={{ width: "60%" }}
            id="standard-basic"
            label="DNI"
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CheckOut;
