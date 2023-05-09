import { renderHook } from "@testing-library/react";
import useCounter from "./useCounter";
import { act } from "react-dom/test-utils";

test("useCounter", () => {
  const { result } = renderHook(() => useCounter());
  act(() => {
    result.current.handleIncrement();
  });
  expect(result.current.count).toBe(1);
});
