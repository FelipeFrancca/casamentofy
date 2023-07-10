import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
import { Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  window?: () => Window;
  refs: { [key: string]: React.RefObject<HTMLElement> };
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Elina e Felipe
      </Typography>
      <Divider />
      <Box  sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
  {[
    { text: 'Ínicio', href: '#inicio' },
    { text: 'Os Noivos', href: '#osnoivos' },
    { text: 'Cerimônia e Recepção', href: '#cerimonia' },
    { text: 'Vestimenta', href: '#vestimenta' },
    { text: 'Confirmação de Presença', href: '#confimacao' },
    { text: 'Lista de Presentes', href: '#lista' },
  ].map((item, index) => (
    <ListItem key={item.text} disablePadding>
      <ListItemButton component="a" href={item.href}>
        <ListItemIcon>
          
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

          </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;



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
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
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

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
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
      
      
    </Box>
  );
}
