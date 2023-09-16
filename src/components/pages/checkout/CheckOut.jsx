import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CheckOut.css";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const [orderId, setOrderId] = useState("");
  const { clearCart, totalPrice, carritoStorage } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (orderId) {
      Swal.fire({
        title: "SportsEssentials",
        text: `Aqui esta tu orden de compra: ${orderId}`,
        imageUrl:
          "https://res.cloudinary.com/dwpppqzr4/image/upload/v1694810323/SportEssentials/Gracias_por_tu_compra_v2trxv.webp",
        imageWidth: 560,
        imageHeight: 166,
        imageAlt: "Custom image",
        confirmButtonColor: "blue",
      }).then(() => {
        navigate("/");
      });
    }
  }, [orderId]);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      city: "",
      document: "",
    },
    onSubmit: (data) => {
      carritoStorage.forEach((product) => {
        const orderDoc = doc(db, "products", product.id);
        updateDoc(orderDoc, { stock: product.stock - product.quantity });
      });
      let costeDeEnvio = 15;
      let subtotal = totalPrice();
      let total = costeDeEnvio + subtotal + "$";

      const ordersCollection = collection(db, "orders");
      const order = { total: total, ...data };

      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
      clearCart();
    },
    validationSchema: Yup.object({
      name: Yup.string("Este campo debe ser una cadena de texto")
        .required("Este campo es obligatorio")
        .matches(/^[A-Za-z\s]+$/, {
          message: "Este campo solo puede contener letras",
        })
        .min(3, "Este campo debe contener al menos 3 caracteres")
        .max(16, "Este campo debe contener maximo 16 caracteres"),
      email: Yup.string("Este campo debe ser una cadena de texto")
        .required("Este campo es obligatorio")
        .email("Tu email no es valido"),
      address: Yup.string("Este campo debe ser una cadena de texto")
        .required("Este campo es obligatorio")
        .min(10, "Este campo debe contener al menos 10 caracteres"),
      phone: Yup.string("En este campo solo se permiten numeros")
        .matches(/^[0-9]+$/, {
          message: "Este campo solo puede contener numeros",
        })
        .required("Este campo es obligatorio")
        .min(9, "Este campo debe contener al menos 9 caracteres"),
      city: Yup.string("Este campo debe ser una cadena de texto")
        .matches(/^[A-Za-z\s]+$/, {
          message: "Este campo solo puede contener letras",
        })
        .required("Este campo es obligatorio")
        .min(4, "Este campo debe contener al menos 4 caracteres"),
      document: Yup.string("Este campo debe ser una cadena de texto")
        .matches(/^[0-9]+$/, {
          message: "Este campo solo puede contener numeros",
        })
        .required("Este campo es obligatorio")
        .min(8, "Este campo debe contener al menos 8 caracteres"),
    }),
    validateOnChange: false,
  });

  return (
    <>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", margin: "20px" }}
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
            minHeight: "700px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px",
            mt: "15px",
            justifyContent: "space-around",
          }}
        >
          <Typography style={{ fontSize: "30px" }}>
            Ingrese sus datos
          </Typography>

          <form onSubmit={handleSubmit} className="formulario">
            <TextField
              sx={{ width: "60%", m: "15px" }}
              id="filled-basic"
              label="Nombre Completo"
              variant="filled"
              name="name"
              onChange={handleChange}
              error={errors.name ? true : false}
              helperText={errors.name}
            />
            <TextField
              sx={{ width: "60%", m: "15px" }}
              id="filled-basic"
              label="Email"
              name="email"
              variant="filled"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
            <TextField
              sx={{ width: "60%", m: "15px" }}
              id="filled-basic"
              label="Direccion"
              name="address"
              variant="filled"
              onChange={handleChange}
              error={errors.address ? true : false}
              helperText={errors.address}
            />
            <TextField
              sx={{ width: "60%", m: "15px" }}
              id="filled-basic"
              label="Telefono"
              name="phone"
              variant="filled"
              onChange={handleChange}
              error={errors.phone ? true : false}
              helperText={errors.phone}
            />
            <TextField
              sx={{ width: "60%", m: "15px" }}
              id="filled-basic"
              label="Ciudad"
              name="city"
              variant="filled"
              onChange={handleChange}
              error={errors.city ? true : false}
              helperText={errors.city}
            />
            <TextField
              sx={{ width: "60%", m: "15px" }}
              id="filled-basic"
              label="DNI"
              name="document"
              variant="filled"
              onChange={handleChange}
              error={errors.document ? true : false}
              helperText={errors.document}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "300px", height: "50px", fontSize: "18px" }}
            >
              Comprar
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckOut;
