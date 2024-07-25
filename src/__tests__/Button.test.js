import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/button/Button";

describe("Button component", () => {
  // Render the Button component
  test("renders with the correct text", () => {
    render(<Button text='Click me' onClick={() => {}} />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  // Call the onClick prop when clicked
  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button text='Click me' onClick={handleClick} />);
    const buttonElement = screen.getByText(/Click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
