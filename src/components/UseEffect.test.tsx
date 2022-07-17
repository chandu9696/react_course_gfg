import { fireEvent, render,screen } from "@testing-library/react"
import ApiTest from "./ApiTest"
import * as api from "./Api";
import UseEffect1 from "./UseEffect1";


describe("Api jest",()=>{
    it('with Mock',async()=>{
        const mock=jest.spyOn(api,"api2");
        mock.mockImplementation(()=>Promise.resolve([{username:'Bret'}]))

        const {getByTestId}=render(<UseEffect1/>)
        expect(await screen.findByText('Bret')).toBeInTheDocument()
        expect(getByTestId("output").innerHTML).toBe("Bret")
        expect(mock).toHaveBeenCalledTimes(1)

        // expect(baseElement).toBeInTheDocument()

    })
})