import React from "react";
import HomeButtom from "./components/homeButton";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CarouselComponent from "./components/CarouselComponent.tsx";
import Banner from "../../../assets/images/banner.png";
import Nos1 from "../../../assets/images/nos/1.jpg";
import Nos2 from "../../../assets/images/nos/2.jpg";
import Nos3 from "../../../assets/images/nos/3.jpg";
import Nos4 from "../../../assets/images/nos/4.jpg";
import Countdown from "./components/countdown";
import LavandaP from "../../../assets/images/lavanda/lavanda1.png";
import LavandaG from "../../../assets/images/lavanda/lavanda2.png";
import GoogleMaps from "./components/googleMaps";

export default function Home() {
  const handleClick = () => {
    console.info("Clicked");
  };

  return (
    <Box className="background"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <CarouselComponent/>
      </Box>
      <Countdown />
      <Box>
        <img
          src={Banner}
          alt="Felipe e Elina"
          style={{ maxWidth: "400px", height: "auto"}}
        />
      </Box>

      <Box
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
          maxWidth: "70%",
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
          emocionante! <br /> Com amor, Sr. & Sra. França.
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <Stack>
          <Chip
            label="Nós"
            variant="outlined"
            onClick={handleClick}
            baseClassName="Dancing-Script"
            sx={{
              width: "100px",
              height: "35px",
              fontSize: "17px",
              fontWeight: "700",
              border: "solid 2px #617322",
            }}
          />
        </Stack>
      </Box>
      <Box>
        <img
          src={LavandaP}
          alt="Felipe e Elina"
          style={{ maxWidth: "150px", height: "auto"}}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100vw",
          maxWidth: "70%",
          marginTop: "30px",
          gap: 10,
        }}
      >
        <img
          src={Nos1}
          alt="Felipe e Elina"
          style={{ width: "400px", height: "auto" }}
        />
        <img
          src={Nos2}
          alt="Felipe e Elina"
          style={{ width: "400px", height: "auto" }}
        />
        <img
          src={Nos3}
          alt="Felipe e Elina"
          style={{ width: "400px", height: "auto" }}
        />
        <img
          src={Nos4}
          alt="Felipe e Elina"
          style={{ width: "400px", height: "auto" }}
        />
      </Box>

      <Box
        sx={{
          marginTop: "30px",
          marginBottom: "15px",
        }}
      >
        <Stack>
          <Chip
            label="CERIMÔNIA E RECEPÇÃO"
            variant="outlined"
            onClick={handleClick}
            baseClassName="Dancing-Script"
            sx={{
              height: "35px",
              fontSize: "17px",
              fontWeight: "700",
              border: "solid 2px #617322",
            }}
          />
        </Stack>
      </Box>
      <Box>
        <img
          src={LavandaP}
          alt="Felipe e Elina"
          style={{ maxWidth: "150px", height: "auto"}}
        />
      </Box>
      <Box
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <Stack>
          <Chip
            label="RECADOS"
            variant="outlined"
            onClick={handleClick}
            baseClassName="Dancing-Script"
            sx={{
              height: "35px",
              fontSize: "17px",
              fontWeight: "700",
              border: "solid 2px #617322",
            }}
          />
        </Stack>
      </Box>
      <Box>
        <img
          src={LavandaP}
          alt="Felipe e Elina"
          style={{ maxWidth: "150px", height: "auto"}}
        />
      </Box>
      <Box
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
          maxWidth: "70%",
          textAlign: "center",
        }}
      >
        <Typography>Em construção</Typography>
      </Box>
      <Box
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <Stack sx={{}}>
          <Chip
            label="DRESS CODE"
            variant="outlined"
            onClick={handleClick}
            baseClassName="Dancing-Script"
            sx={{
              height: "35px",
              fontSize: "17px",
              fontWeight: "700",
              border: "solid 2px #617322",
            }}
          />
        </Stack>
      </Box>
      <Box>
        <img
          src={LavandaP}
          alt="Felipe e Elina"
          style={{ maxWidth: "150px", height: "auto"}}
        />
      </Box>
      <Box
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
          maxWidth: "70%",
          textAlign: "center",
        }}
      >
        <Typography>Em construção</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100vw",
          maxWidth: "50%",
          marginTop: "30px",
          gap: 10,
        }}
      >
        <HomeButtom component={Link} to="/" label="Confirmar Presença" />
        <HomeButtom component={Link} to="/" label="Lista de Presentes" />
      </Box>
      <Box>
        <img
          src={LavandaG}
          alt="Felipe e Elina"
          style={{maxWidth: "800px", height: "auto", marginLeft: "-60rem", marginTop: "-500px"}}
        />
      </Box>
    </Box>
  );
}
