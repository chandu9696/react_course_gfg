import { fireEvent, render,screen } from "@testing-library/react"
import ApiTest from "./ApiTest"
import * as api from "./Api";


describe("Api jest",()=>{
    it('with Mock',async()=>{
        const mock=jest.spyOn(api,"api");
        mock.mockImplementation(()=>Promise.resolve('geek'))

        const {getByTestId}=render(<ApiTest/>)
        expect(await screen.findByText('geek')).toBeInTheDocument()
        expect(getByTestId("output").innerHTML).toBe("geek")
        expect(mock).toHaveBeenCalledTimes(1)

        // expect(baseElement).toBeInTheDocument()

    })
})