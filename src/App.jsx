import "./App.css";

//MUI imports
import { Box, Typography } from "@mui/material";
import Card from "./Pages/Assets/Components/Card";
//MUI imports end

import imgliquidificador from "./Pages/Assets/img/default.png";

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
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "1200px",
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
      </Box>
      <Box className="tracking-in-contract-bck-bottom"
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
        p={20}
        fontWeight={700}
      >
        <Card
          nome="Liquidificador" link="https://m.casasbahia.com.br/liquidificador-mondial-turbo-power-l-99-fb-preto-500w-com-3-velocidades-50004213/p/50004214" img={imgliquidificador}></Card>
        <Card nome="Liquidificador" link="https://bit.ly/lipeejoyce" img={imgliquidificador}></Card>
        <Card nome="Liquidificador" link="https://bit.ly/lipeejoyce" img={imgliquidificador}></Card>
        <Card nome="Liquidificador" link="https://bit.ly/lipeejoyce" img={imgliquidificador}></Card>
        <Card nome="Liquidificador" link="https://bit.ly/lipeejoyce" img={imgliquidificador}></Card>
        <Card nome="Liquidificador" link="https://bit.ly/lipeejoyce" img={imgliquidificador}></Card>
      </Box>
    </Box>
  );
}

export default App;
