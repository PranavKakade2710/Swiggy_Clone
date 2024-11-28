import { fireEvent, render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_MENU_DATA from "../mocks/mockResMenuData.json"
import Header from "../Header";
import Cart from "../Cart"
import "@testing-library/jest-dom"
global.fetch=jest.fn(()=>Promise.resolve({
    json: ()=> Promise.resolve(MOCK_MENU_DATA)
}))

it("Should load the restaurant menu", async()=>{
    await act(async()=>{
render( 
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    <RestaurantMenu/>
    <Cart/>
    </Provider>
    </BrowserRouter>
    )
    });
    const getaccordiant = screen.getByText("Veg Pizza(14)")

    fireEvent.click(getaccordiant);

    const foodItems = screen.getAllByTestId("fooditems");

    expect(foodItems.length).toBe(14)

    const addBtn = screen.getAllByRole("button",{name:"Add +"})

    fireEvent.click(addBtn[0]);
  
    expect(screen.getByText("🛒- (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtn[1]);

    expect(screen.getByText("🛒- (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("fooditems").length).toBe(16)

    fireEvent.click(screen.getByText("Clear Cart"))

    expect(screen.getAllByTestId("fooditems").length).toBe(14)

    expect(screen.getByText("Please add Items to your cart!! Your cart is empty")).toBeInTheDocument()

})