import { fireEvent, render } from "@testing-library/react"
import SimpleJest from "./SimpleJest"

describe("SimpleJest",()=>{
    it('render without any crash',()=>{
        const {baseElement}=render(<SimpleJest/>)
        expect(baseElement).toBeInTheDocument()

    })
    it('render without any crash',()=>{
        const {getByTestId}=render(<SimpleJest/>)
        const inputElement=getByTestId("input")
        fireEvent.change(inputElement,{target:{value:'test'}})
        const outputElement=getByTestId("output")
        expect(outputElement.innerHTML).toBe("test")

        // expect(baseElement).toBeInTheDocument()

    })
    it('snapshot',()=>{
        const {baseElement}=render(<SimpleJest/>)
        expect(baseElement).toMatchSnapshot()

        // expect(baseElement).toBeInTheDocument()

    })
})