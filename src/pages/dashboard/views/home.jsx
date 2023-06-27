import React from "react";
import HomeButtom from "./components/homeButton";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../../assets/images/carrossel/carrossel1.jpg";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          
          marginTop: "15px",
        }}
      >
        <img src={img} alt="Banner" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginLeft: "45rem",
          marginTop: "15px",
        }}
      >
        <HomeButtom
          component={Link}
          to="https://pmbarcelona.prosipe.com"
          label="BOX1"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmboasaude.prosipe.com"
          label="BOX2"
          color="primary"
        />
      </Box>
    </Box>
  );
}
