import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Constact Us page test Case",()=>{
it("Should load contact us Component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

it("Should load Button inside Contact Component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("Should load Button inside Contact Component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("Your Name");

  expect(inputName).toBeInTheDocument();
});

it("Should load two Input boxes", () => {
  render(<Contact />);

  const inputBox = screen.getAllByRole("textbox");
  console.log(inputBox.length);
  expect(inputBox.length).toBe(3);
});

})
