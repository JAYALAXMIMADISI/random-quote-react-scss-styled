import { render,screen } from "@testing-library/react";
import RandomQuote from ".";
import '@testing-library/jest-dom'
import ShowQuote from "./show-quote";


jest.mock('./show-quote.js')
describe("Index",()=>{
    test("test renders random quote correctly",()=>{
        render(<RandomQuote/>)
        const buttonElement=screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument
    })
    test('show quote component',()=>{
        render(<ShowQuote/>)
        expect(ShowQuote.mock.calls).toHaveLength(1)
    })
   
})