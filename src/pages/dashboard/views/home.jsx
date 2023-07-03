import React, { useRef } from "react";
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
import Maps from "./components/maps";

export default function Home() {
  const handleClick = () => {
    console.info("Clicked");
  };

  const inicioRef = useRef(null);
  const osNoivosRef = useRef(null);
  const cerimoniaRef = useRef(null);
  const confirmacaoRef = useRef(null);
  const listaRef = useRef(null);
  const recadosRef = useRef(null);
  const dressRef = useRef(null);

  return (
    <Box ref={inicioRef}
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
        <CarouselComponent />
      </Box>
      <Box>
        <img
          src={Banner}
          alt="Felipe e Elina"
          style={{ maxWidth: "400px", height: "auto" }}
        />
      </Box>

      <Countdown />

      <Box
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
          maxWidth: "50%",
          textAlign: "center",
        }}
      >
        <Typography>
          Criamos este site com muita alegria para compartilhar todos os
          detalhes da organização do nosso casamento. A contagem regressiva para
          o dia mais incrível de nossas vidas já começou, e queremos vivenciar
          esse momento especial em que nossa união será abençoada diante de Deus
          ao lado de vocês!
          <br />
          Estamos ansiosos pela presença de cada um de vocês em nosso casamento.
          Será um dia repleto de amor, alegria e memórias inesquecíveis.
        </Typography>
      </Box>

      <Box ref={osNoivosRef}
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <Stack>
          <Chip
            label="Os Noivos"
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
          style={{ maxWidth: "150px", height: "auto", marginTop: "-15px" }}
        />
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
          Nossa história parece mais um livro sobre amigos que se apaixonam.
          Rsrs. <br />
          Nos conhecemos no trabalho e lá nos tornamos bons amigos. Gostávamos
          muito de implicar um com o outro, principalmente Felipe. Durante esse
          período de amizade, parcebemos que tínhamos as mesmas visões para o
          futuro. Com o tempo, começamos a sentir algo a mais um pelo outro,
          embora nenhum de nós soubesse dos sentimentos do outro. Até que um
          dia, Felipe me surpreendeu com um beijo, e a partir daquele momento,
          não nos separamos mais.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
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
          style={{ width: "400px", height: "auto", border: "solid 6px #617322", }}
        />
        <img
          src={Nos2}
          alt="Felipe e Elina"
          style={{ width: "400px", height: "auto", border: "solid 6px #617322", }}
        />
        <img
          src={Nos3}
          alt="Felipe e Elina"
          style={{ width: "400px", height: "auto", border: "solid 6px #617322", }}
        />
        <img
          src={Nos4}
          alt="Felipe e Elina"
          style={{ width: "400px", height: "auto", border: "solid 6px #617322", }}
        />
      </Box>

      <Box ref={cerimoniaRef}
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
          style={{ maxWidth: "150px", height: "auto", marginTop: "-15px" }}
        />
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
          Nossa cerimônia vai ocorrer ás 16h da tarde, aconselhamos que cheguem
          30 minutos antes, pois a noiva não irá se atrasar. <br/>
          A recepção será no mesmo endereço, Chácara Bela Vista RN, proximo ao Jiqui Country Club. <br/>
          <br/>
          Contamos com sua presença, para testemunhar a benção de Deus sob a nossa união.
          <br/>Não esqueça da confirmação! Por gentileza, coloquem o CPF na observação para
          liberação na portaria do local.
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "30px",
          marginBottom: "50px",
          border: "solid 6px #617322",
        }}
      >
        <Maps />
      </Box>

      <Box ref={recadosRef}
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
          style={{ maxWidth: "150px", height: "auto", marginTop: "-15px" }}
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
      <Box ref={dressRef}
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
          style={{ maxWidth: "150px", height: "auto", marginTop: "-15px" }}
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

      <Box ref={listaRef}
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
        <HomeButtom component={Link} to="https://docs.google.com/forms/d/e/1FAIpQLSfxmcMkhXZl9pjb-c0wtY4XnPSs-5jhZkqklrIWiWuk78zLRA/viewform" label="Lista de Presentes" />
      </Box>
      <Box ref={confirmacaoRef}>
        <img
          src={LavandaG}
          alt="Felipe e Elina"
          style={{
            maxWidth: "800px",
            height: "auto",
            marginLeft: "-60rem",
            marginTop: "-500px",
          }}
        />
      </Box>
    </Box>
  );
}
