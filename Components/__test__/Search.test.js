import { fireEvent, render,screen } from "@testing-library/react"
import Body from "E:/Pranav_Project/SwiggyClone/Components/Body.js"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should search pizza test in search input",async()=>{

    await act(async()=>{
        render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        )
    })

    const searchBtn = screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target :{value:"pizza"}})

    fireEvent.click(searchBtn);
    const resCards= screen.getAllByTestId("rescard")
    expect(resCards.length).toBe(5)
  
})

it("Should find the top rated restaurants",async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        )
    });
    const totalResCard=screen.getAllByTestId("rescard")
    expect(totalResCard.length).toBe(20);

    const topResBtn= screen.getByTestId("topRestaurantBtn")
    fireEvent.click(topResBtn)
    const topResAfterClick = screen.getAllByTestId("rescard")
    expect(topResAfterClick.length).toBe(19);
})