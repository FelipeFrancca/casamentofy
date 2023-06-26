import React from "react";
import HomeButton from "./components/homeButton";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import CarouselComponent from "./components/Carrossel";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <CarouselComponent />
        <HomeButton
          component={Link}
          to="https://pmbarcelona.prosipe.com"
          label="Box1"
          color="primary"
        />
        <HomeButton
          component={Link}
          to="https://pmboasaude.prosipe.com"
          label="Box2"
          color="primary"
        />
      </Box>
    </Box>
  );
}

export default Home;
