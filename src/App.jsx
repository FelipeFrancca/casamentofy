import "./App.css";

//MUI imports
import { Box, Typography } from "@mui/material";
//MUI imports end

//Fonts imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Album from "./Pages/Album";
//Fonts imports end

function App() {
  return (
    <div className="App">
      <Album></Album>
    </div>
  );
}

export default App;
