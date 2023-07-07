import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";

interface Props {
  window?: () => Window;
  refs: { [key: string]: React.RefObject<HTMLElement> };
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { window, refs } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToSection = (sectionId) => {
    const sectionRef = refs[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      handleDrawerToggle(); // Fechar o menu ao clicar em um item
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Felipe e Elina França
      </Typography>
      <Divider />
      <List>
        
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{
      display: "flex",
      }}>
      <CssBaseline />
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
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
        <Outlet />
      </main>
    </Box>
  );
}
