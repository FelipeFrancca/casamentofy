import React from "react";

import HomeButtom from "./components/homeButton";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import FullScreenButton from "./components/fullScreenButton";

export default function Home() {

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
          flexWrap: "wrap",
        }}
      >
        
      <FullScreenButton/>
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
        <HomeButtom
          component={Link}
          to="https://pmcaicaradonorte.prosipe.com"
          label="(PM) Caiçara do Norte"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmcaicaradoriodovento.prosipe.com"
          label="(PM) Caiçara do Rio do Vento"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmcampogrande.prosipe.com"
          label="(PM) Campo Grande"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://cmcerrocora.prosipe.com"
          label="(CM) Cerro Corá"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmgalinhos.prosipe.com"
          label="(PM) Galinhos"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://institutocisne.prosipe.com"
          label="(INST) Instituto Cisne"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmjucurutu.prosipe.com"
          label="(PM) Jucurutu"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmlajespintadas.prosipe.com"
          label="(PM) Lajes Pintadas"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://cmmossoro.prosipe.com"
          label="(CM) Mossoró"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmpedragrande.prosipe.com"
          label="(PM) Pedra Grande"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://sipe.previpaulista.pe.gov.br"
          label="(PREV) Paulista"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmsantamaria.prosipe.com"
          label="(PM) Santa Maria"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmsaotome.prosipe.com"
          label="(PM) São Tomé"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://cmserracaiada.prosipe.com"
          label="(CM) Serra Caiada"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmserradesaobento.prosipe.com"
          label="(PM) Serra de São Bento"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmsitionovo.prosipe.com"
          label="(PM) Sítio Novo"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://pmtimbaubadosbatistas.prosipe.com"
          label="(PM) Timbaúba dos Batistas"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://cmcearamirim.prosipe.com/"
          label="(CM) Ceará-Mirim"
          color="primary"
        />
        <HomeButtom
          component={Link}
          to="https://modelo.prosipe.com"
          label="Modelo"
          color="primary"
        />
      </Box>
    </Box>
  );
}
