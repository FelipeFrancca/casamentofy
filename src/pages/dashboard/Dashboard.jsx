import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../../assets/themes/theme";
import "../../assets/styles/app.css";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FullscreenButton from "./views/components/fullScreenButton";

/* IMPORT ICONS */

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

/* END IMPORT ICONS */

/* SUB-ROTAS DA APLICACAO Dashboard obs.: nao alterar o programador morreu e ninguem sabe o que isso faz */
import { Outlet } from "react-router-dom";
/* END ROTAS */

// Begin Image Imports
import Logoprosipe from "../../assets/images/logos/prosipedarkmode.png";
import { Link } from "react-router-dom";
// End Image Imports

//Begin switch

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    background: "linear-gradient(to bottom, #ff3500 0%, #f6821f 100%)", //background: linear-gradient(to right, rgb(255, 53, 0) 0%, rgb(246, 130, 31) 100%);
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

//end switch

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://exatoconsultoria.com/">
        Exato Consultoria
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Dashboard() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("themeMode") === "true"
  );
  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("themeMode", !darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container maxWidth="100%">
        {/* Header */}
        <CssBaseline />
        <AppBar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          color="header"
          enableColorOnDark
          className="borderOrange"
        >
          <FullscreenButton/>
          <Toolbar>
            <LibraryBooksIcon sx={{ color: "#ffffff", mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              <Link className="GerenColor" to="/">
                PROSIPE - Server status
              </Link>
            </Typography>
          </Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img src={Logoprosipe} alt="logo" className="logoprosipe" />
            <FormGroup>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    checked={darkMode}
                    onChange={handleDarkModeChange}
                  />
                }
              />
            </FormGroup>
          </Box>
        </AppBar>
        {/* End Header */}

        {/* Body */}
        <main>
          <Container sx={{ py: 8, marginTop: 3 }}>
            {/**
             * Local onde as Rotas vao ser renderizadas na aplicacao o resto permanece estatico.
             * */}
            <Outlet />
          </Container>
        </main>
        {/* End Body */}

        {/* Footer */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Exato Consultoria
          </Typography>
          <Copyright />
        </Box>
        {/* End footer */}
      </Container>
    </ThemeProvider>
  );
}

export default Dashboard;
