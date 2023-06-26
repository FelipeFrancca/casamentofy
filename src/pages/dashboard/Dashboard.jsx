import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../../assets/themes/theme";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Dashboard() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          background: "#fff",
          color: "#000",
          display: "flex",
          flexDirection: "column",
          borderBottom: "solid 6px #7B00B4"
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
          >
            Casamento de Felipe e Elina França
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8, marginTop: 3 }}>
          {/**
           * Local onde as Rotas vao ser renderizadas na aplicacao o resto permanece estatico.
           * */}
          <Outlet />
        </Container>
      </main>
    </Box>
  );
}

export default Dashboard;
