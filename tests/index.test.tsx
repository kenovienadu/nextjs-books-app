import Home from "../pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AvailableBooksApiResponse } from "../types";
import { Provider } from "react-redux";
import { store } from "../store";

describe('HomePage', () => {
  it('renders the homepage', () => {
    const availableBooks: AvailableBooksApiResponse = [];

    render(
      <Provider store={store}>
        <Home 
          metaDescription="test" 
          metaTitle="test title"
          copy="test copy"
          availableBooks={availableBooks}
        />
      </Provider>
      )

    const h3 = screen.getByRole("heading", { level: 3 });
    const introContent = screen.queryByText("Available Books");
    const copyParagraph = screen.getByTestId("copy");

    expect(h3.textContent).toContain("Online Book Store");
    expect(introContent?.textContent).toBeDefined();
    expect(copyParagraph).toBeInTheDocument()
  })
})