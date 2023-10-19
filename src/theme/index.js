import global from "./global";
import testComponentTheme from "./componentsTheme/TestComponent";

const componentsTheme = {
  testComponentTheme,
};

const theme = {
  ...global,
  ...componentsTheme,
};

export default theme;
