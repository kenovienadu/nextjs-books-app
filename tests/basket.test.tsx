import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import BasketView from "../pages/basket";
import { store } from "../store";
import { addItem, clearBasket } from "../store/slices/basket.slice";
import { BasketItem } from "../types";


jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));

describe("BasketView", () => {
  beforeEach(() => {
    // Clear Basket
    store.dispatch(clearBasket());

    render(
      <Provider store={store}>
        <BasketView />
      </Provider>
    )
  })

  it("should display basket", () => {
    const h3 = screen.getByRole("heading", { level: 3 });
    expect(h3.textContent).toBe("Basket Summary")
  })

  it("should show pay button when items in the basket", () => {
    const bookToAdd: BasketItem = {
      id: 2,
      title: "book one",
      qty: 2
    };

    // Add an Item to the Basket
    act(() => store.dispatch(addItem(bookToAdd)));
    const payButton = screen.getByTestId("payBtn");
    expect(payButton).toBeDefined();
  })

  it("should show empty text when no items in the basket", () => {
    const emptyDiv = screen.getByText("No items in your basket")
    expect(emptyDiv).toBeDefined();
  })


})