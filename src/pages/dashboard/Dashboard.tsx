import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

interface Props {
  window?: () => Window;
  refs: { [key: string]: React.RefObject<HTMLElement> };
}

export default function DrawerAppBar(props: Props) {

  return (
    <Box sx={{
      }}>
      <AppBar
        component="nav"
        sx={{
          justifyContent: "center",
          height: "80px",
          color: "#fff",
          background: "#4F328C",
          borderBottomRightRadius: "100px",
          
          "@media (max-width: 768px)": {
            height: "60px",
          },
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Elina e Felipe França
          </Typography>
          <Box  sx={{ display: { xs: "none", sm: "block" } }}>
        <nav>
          <ul style={{ listStyle: "none", display: "flex", justifyContent: "center", alignItems: "center" , gap: "0.75rem", }}>
            <li><a style={{ textDecoration: "none", color: "#fff", fontWeight: "700", textTransform: "uppercase" }} href="#inicio">Ínicio</a></li>
            <li><a style={{ textDecoration: "none", color: "#fff", fontWeight: "700", textTransform: "uppercase" }} href="#osnoivos">Os Noivos</a></li>
            <li><a style={{ textDecoration: "none", color: "#fff", fontWeight: "700", textTransform: "uppercase" }} href="#cerimonia">Cerimônia e Recepção</a></li>
            <li><a style={{ textDecoration: "none", color: "#fff", fontWeight: "700", textTransform: "uppercase" }} href="#vestimenta">Vestimenta</a></li>
            <li><a style={{ textDecoration: "none", color: "#fff", fontWeight: "700", textTransform: "uppercase" }} href="#confimacao">Confirmação de Presença</a></li>
            <li><a style={{ textDecoration: "none", color: "#fff", fontWeight: "700", textTransform: "uppercase" }} href="#lista">Lista de Presentes</a></li>
          </ul>
        </nav>
          </Box>
        </Toolbar>
      </AppBar>
      
      <main>
        <Container sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}>
        <Outlet />
        </Container>
      </main>
    </Box>
  );
}
