import { fireEvent, render, screen } from "@testing-library/react";
import { CounterRedux } from "./CounterRedux";
import { createStore } from "./store";
import { Provider } from "react-redux";

test("should increment by one", () => {
  render(
    <Provider store={createStore}>
      <CounterRedux />;
    </Provider>
  );
  const counterText = screen.getByRole("contentinfo");
  expect(counterText).toHaveTextContent("0");
  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  expect(counterText).toHaveTextContent("1");
});

test("should increment by one again", () => {
  render(
    <Provider store={createStore}>
      <CounterRedux />;
    </Provider>
  );
  const counterText = screen.getByRole("contentinfo");
  expect(counterText).toHaveTextContent("0");
  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  expect(counterText).toHaveTextContent("1");
});
