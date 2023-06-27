import React from "react";
import HomeButtom from "./components/homeButton";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CarouselComponent from "./components/CarouselComponent.tsx";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginTop: "15px",
          marginBottom: "15px"
        }}
      >
        <CarouselComponent />
      </Box>
      <Box
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
          maxWidth: "50%",
          textAlign: "center",
        }}
      >
        <Typography>
          Bem-vindos ao nosso site de casamento! <br />É com imensa alegria que
          recebemos vocês aqui, para compartilhar conosco momentos especiais e
          cheios de amor. Sejam todos muito bem-vindos a essa celebração única,
          onde vamos unir nossas vidas e criar memórias eternas. Neste espaço
          virtual, queremos proporcionar a vocês uma experiência encantadora,
          repleta de detalhes e informações para que se sintam parte integrante
          desse dia mágico. Aqui, vocês encontrarão todas as informações
          necessárias para desfrutar plenamente do nosso casamento, desde a data
          e o local até os momentos emocionantes que planejamos compartilhar com
          cada um de vocês. Explore as diferentes seções do site para descobrir
          detalhes sobre a cerimônia, a festa e tudo o que envolve esse momento
          tão especial. Não hesitem em perguntar se tiverem dúvidas ou
          precisarem de algum esclarecimento adicional. Estamos aqui para ajudar
          e garantir que todos se sintam bem acolhidos. Além disso, gostaríamos
          de agradecer imensamente a presença de cada um de vocês. Sabemos que,
          mesmo à distância, vocês estão conosco de coração, compartilhando as
          vibrações positivas e nos desejando o melhor. Suas mensagens,
          pensamentos e carinho são extremamente importantes para nós, e nos
          sentimos verdadeiramente abençoados por tê-los em nossas vidas. Então,
          queridos convidados, aproveitem ao máximo o nosso site de casamento.
          Descubram histórias sobre nós, vejam fotos especiais e mergulhem no
          clima de amor e felicidade que estamos criando para esse dia.
          Esperamos que esse seja apenas o início de uma jornada incrível, onde
          possamos compartilhar muitos outros momentos memoráveis juntos. Agora,
          vamos juntos celebrar o amor e aproveitar cada instante dessa jornada
          emocionante! <br/> Com amor, Sr. & Sra. França
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100vw",
          maxWidth: "80%",
          marginTop: "30px",
          gap: 10,
        }}
      >
        <HomeButtom
          component={Link}
          to="/"
          label="Confirmar Presença"
        />
        <HomeButtom
          component={Link}
          to="/"
          label="Lista de Presentes"
        />
      </Box>
    </Box>
  );
}
