import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import BookDetailView from "../pages/detail/[id]";
import { store } from "../store";
import { Book } from "../types";


describe("BookDetailView", () => {
  it("should display book details", () => {
    const book: Book = {
      id: 2,
      title: "test title",
      cover: "",
      author: "john doe",
      metaDescription: "test meta description",
      metaTitle: "test meta title"
    }

    render(
      <Provider store={store}>
        <BookDetailView
          details={book}
        />
      </Provider>
    )

    const h3 = screen.getByRole("heading", { level: 3 });
    expect(h3.textContent).toBe(book.title);
  })
})