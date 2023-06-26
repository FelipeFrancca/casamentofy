import React from "react";
import CarouselComponent from "./components/CarouselComponent";
import HomeButtom from "./components/homeButton";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {

  return (

    
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CarouselComponent/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "80%",
        }}
      >
        <HomeButtom
          component={Link}
          to="https://pmbarcelona.prosipe.com"
          label="(PM) Barcelona"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmboasaude.prosipe.com"
          label="(PM) Boa Saúde"
          color="primary"
        />
      </Box>
    </Box>
  );
}
