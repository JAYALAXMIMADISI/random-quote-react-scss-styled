import { render } from "@testing-library/react"
import PrintQuote from "./print-quote"
import ShowQuote from "./show-quote"



jest.mock('./print-quote.js')
describe('first', () => { 
    test(
        'test render correctly',()=>{
            render(<ShowQuote/>)
            expect(PrintQuote.mock.calls).toHaveLength(1)
        }
    )
 })