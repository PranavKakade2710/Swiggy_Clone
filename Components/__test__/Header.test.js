import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../Utils/appStore";
import "@testing-library/jest-dom";

it("Should display the login button in the header", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loggInButton = screen.getByRole("button",{name: "Login"});
    fireEvent.click(loggInButton);
    const logOutButton= screen.getByRole("button",{name: "Logout"});
    expect(loggInButton).toBeInTheDocument();

  });