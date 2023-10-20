import { render } from "@testing-library/react";
import { IntegrationProvider } from "./testUtils";

const renderWithIntegrationProvider = (children) =>
  render(<IntegrationProvider>{children}</IntegrationProvider>);

export default renderWithIntegrationProvider;
