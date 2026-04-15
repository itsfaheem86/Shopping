import { describe, expect, test } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  test("should render", () => {
    render(<App />);
    expect(screen.getByText("Welcome to the React App!")).toBeInTheDocument();
  });
});
