import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Kontakt from "./components/Layout/Kontakt/Kontakt";
import Edu from "./components/Layout/Edu/Edu";

test("renders & async operations work correctly Edu", async () => {
  render(
    <BrowserRouter>
      <Edu />
    </BrowserRouter>,
  );
  const linkElement = await waitFor(() => screen.getByText("pobieram..."));
  expect(linkElement).toBeInTheDocument();
});
