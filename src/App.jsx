import TestComponent from "./components/TestComponent";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import "../normalize.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TestComponent />
    </ThemeProvider>
  );
}

export default App;
