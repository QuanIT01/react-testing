import { fireEvent, render, screen } from "@testing-library/react";
import CounterZustand from "./CounterZustand";
import { useCounterStore } from "./counterStore";

const originalState = useCounterStore.getState();
beforeEach(() => {
  useCounterStore.setState(originalState);
});

test("should increment by one", () => {
  render(<CounterZustand />);
  const counterText = screen.getByRole("contentinfo");
  expect(counterText).toHaveTextContent("0");
  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  expect(counterText).toHaveTextContent("1");
});

test("should decrement by one", () => {
  render(<CounterZustand />);
  const counterText = screen.getByRole("contentinfo");
  expect(counterText).toHaveTextContent("0");
  const decrementButton = screen.getByText("Decrement");
  fireEvent.click(decrementButton);
  expect(counterText).toHaveTextContent("-1");
});
