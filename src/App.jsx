import "./App.css";

//MUI imports
import { Box, } from "@mui/material";
import Card from "./Pages/Assets/Components/Card";
//MUI imports end

import imgliquidificador from './Pages/Assets/img/imgteste.jpg';

//Fonts imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
//Fonts imports end

function App() {
  return (
    <div className="App">
      <Box>
        <Card nome="Liquidificador" link="https://mui.com/material-ui/react-card/" img={imgliquidificador}></Card>
      </Box>
    </div>
  );
}

export default App;
