import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestComponent from "..";
import { beforeEach, expect } from "vitest";
import renderWithIntegrationProvider from "../../../../configs/vitest/CustomRender";

describe("TestComponent", () => {
  let container;

  beforeEach(() => {
    container = renderWithIntegrationProvider(<TestComponent />).container;
  });

  it("Label is displayed", () => {
    const label = screen.getByText(/testcomponent/i);
    expect(label).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("isClicked is displayed when button is clicked", async () => {
    const button = screen.getByRole("button", {
      name: /common:display.the.text/i,
    });
    await userEvent.click(button);
    const isClicked = screen.getByText(/lorem ipsum/i);
    expect(isClicked).toBeInTheDocument();
    await userEvent.click(button);
    expect(isClicked).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
