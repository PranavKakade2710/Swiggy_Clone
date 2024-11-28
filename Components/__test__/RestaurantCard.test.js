import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";
import { withOpenLable } from "../RestaurantCard";
it("Should rander Restaurant Card component with props", ()=>{
render(<RestaurantCard resdata={MOCK_DATA}/>)

const name=screen.getByText("Pizza Hut")

expect(name).toBeInTheDocument()
});

it("Should rander Restaurant Card component withOpenLable",()=>{
    const EnhanceCard= withOpenLable(RestaurantCard)
    render(<EnhanceCard resdata={MOCK_DATA}/>)
    const isOpen=screen.getByText("Open Now")


expect(isOpen).toBeInTheDocument()
});