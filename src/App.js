import "./App.css";

//MUI imports
import { Box, Typography } from "@mui/material";
//MUI imports end

//Fonts imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
//Fonts imports end

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box>
          <Typography variant="h1" fontWeight={700}>
            Meu Casamentoo <br/>
            😭💸
          </Typography>
        </Box>
      </header>
    </div>
  );
}

export default App;
