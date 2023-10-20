import { ThemeProvider } from "@emotion/react";
import theme from "../../src/theme";
import PropTypes from "prop-types";

export const IntegrationProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

IntegrationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
