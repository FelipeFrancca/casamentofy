import { Box } from "@mui/material";
import React from "react";

const Mapa = () => {
  return (
    <Box>
      <iframe
        title="Mapa de geolocalização para o endereço do evento"
        width="400px"
        height="400px"
        style={{ border: "0" }}
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDF4VgbU9xWjttw7ebXRURtpNvvPpIB_eM&q=place_id:EjozUkg0K000LCBQYXJuYW1pcmltIC0gU3RhdGUgb2YgUmlvIEdyYW5kZSBkbyBOb3J0ZSwgQnJhemlsIiY6JAoKDUOOePwVhbcF6xAKGhQKEgnrJ9PldviyBxHbgL8LYVBQ_w"
      ></iframe>
    </Box>
  );
};

export default Mapa;
