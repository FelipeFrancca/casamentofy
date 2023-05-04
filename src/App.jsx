import "./App.css";

//MUI imports
import { Box, Typography } from "@mui/material";

//MUI imports end

import imgliquidificador from "./Pages/Assets/img/default.png";
import Carrossel from "./Pages/Assets/Components/Carrossel";
import Card from "./Pages/Assets/Components/Card";

//Fonts imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
//Fonts imports end

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "100%",
      }}
    >
      <Carrossel></Carrossel>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
        p={5}
      >
        <Box className="text-focus-in" sx={{ textAlign: "center" }}>
          <Typography variant="h1" fontWeight={700}>
            Bem vindo ao nosso casamento
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            Por: Felipe e Elina França
          </Typography>
          <Box className="text-focus-in" sx={{ textAlign: "center" }}>
          <Typography variant="h2" fontWeight={700} p={10}>
            Lista de presentes 🛍️
          </Typography>
          </Box>
        </Box>
        <Box
          className="tracking-in-contract-bck-bottom"
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
          p={5}
          fontWeight={700}
        >
          <Card
            nome="Liquidificador"
            link="https://m.casasbahia.com.br/liquidificador-mondial-turbo-power-l-99-fb-preto-500w-com-3-velocidades-50004213/p/50004214"
            img={imgliquidificador}
          ></Card>
          <Card
            nome="Liquidificador"
            link="https://bit.ly/lipeejoyce"
            img={imgliquidificador}
          ></Card>
          <Card
            nome="Liquidificador"
            link="https://bit.ly/lipeejoyce"
            img={imgliquidificador}
          ></Card>
          <homeButtom></homeButtom>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
