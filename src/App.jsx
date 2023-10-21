import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import "../normalize.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
