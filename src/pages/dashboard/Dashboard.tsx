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
      <Typography variant="h6" sx={{ my: 1.7 }}>
        Elina e Felipe
      </Typography>
      <Divider />
      <Box>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#inicio" sx={{color: "#000", textTransform: "uppercase", textAlign: "center"}}>
              <ListItemText primary="Ínicio" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#osnoivos" sx={{textTransform: "uppercase", textAlign: "center"}}>
              <ListItemText primary="Os Noivos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#cerimonia" sx={{textTransform: "uppercase", textAlign: "center"}}>
              <ListItemText primary="Cerimônia e Recepção" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#vestimenta" sx={{textTransform: "uppercase", textAlign: "center"}}>
              <ListItemText primary="Vestimenta" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#confimacao" sx={{textTransform: "uppercase", textAlign: "center"}}>
              <ListItemText primary="Confirmação de Presença" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#lista" sx={{textTransform: "uppercase", textAlign: "center"}}>
              <ListItemText primary="Lista de Presentes" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

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
          <Box  sx={{ display: { xs: "none", sm: "block", } }}>
          <nav>
        <List sx={{display: "flex", flexDirection: "row", textTransform: "uppercase", fontWeight: "900"}}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#inicio" sx={{textAlign: "center"}}>
              <ListItemText primary="Ínicio" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#osnoivos" sx={{textAlign: "center"}}>
              <ListItemText primary="Os Noivos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#cerimonia" sx={{textAlign: "center"}}>
              <ListItemText primary="Cerimônia e Recepção" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#vestimenta" sx={{textAlign: "center"}}>
              <ListItemText primary="Vestimenta" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#confimacao" sx={{textAlign: "center"}}>
              <ListItemText primary="Confirmação de Presença" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#lista" sx={{textAlign: "center"}}>
              <ListItemText primary="Lista de Presentes" />
            </ListItemButton>
          </ListItem>
        </List>
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
