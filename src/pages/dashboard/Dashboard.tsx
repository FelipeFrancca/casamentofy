import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

interface Props {
  window?: () => Window;
  refs: { [key: string]: React.RefObject<HTMLElement> };
}

const drawerWidth = 240;
const navItems = [
  { title: "Início", sectionId: "inicio" },
  { title: "Os Noivos", sectionId: "osNoivos" },
  { title: "CERIMÔNIA E RECEPÇÃO", sectionId: "cerimonia" },
  { title: "CONFIRMAÇÃO DE PRESENÇA", sectionId: "confirmacao" },
  { title: "LISTA DE PRESENTES", sectionId: "lista" },
  { title: "RECADOS", sectionId: "recados" },
  { title: "DRESS CODE", sectionId: "dress" },
];

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

  const sections = [
    {
      title: "Seção 1",
      items: navItems.slice(0, 3),
    },
    {
      title: "Seção 2",
      items: navItems.slice(3, 6), // Defina aqui os itens que deseja na segunda seção
    },
    {
      title: "Seção 3",
      items: navItems.slice(6), // Defina aqui os itens que deseja na terceira seção
    },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Felipe e Elina França
      </Typography>
      <Divider />
      <List>
        {sections.map((section) => (
          <div key={section.title}>
            <Typography variant="subtitle1" sx={{ my: 1 }}>
              {section.title}
            </Typography>
            {section.items.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  onClick={() =>
                    scrollToSection(item.sectionId.toLowerCase().replace(/ /g, ""))
                  }
                >
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </div>
        ))}
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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.title}
                sx={{ color: "#fff" }}
                onClick={() =>
                  scrollToSection(item.sectionId.toLowerCase().replace(/ /g, ""))
                }
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      
      <main>
        <Outlet />
      </main>
    </Box>
  );
}
