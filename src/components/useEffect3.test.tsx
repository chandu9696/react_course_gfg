import { fireEvent, render,screen } from "@testing-library/react"
import ApiTest from "./ApiTest"
import * as api from "./Api";
import UseEffect1 from "./UseEffect1";
import UseEffect3 from "./UseEffect3";


describe("Api jest",()=>{
    it('with Mock',async()=>{
        const mock=jest.spyOn(api,"api3");
        mock.mockImplementation(()=>Promise.resolve([{first_name:'test1',last_name:" test2"}]))

        const {getByTestId}=render(<UseEffect3/>)
        expect(await screen.findByText('test1 test2')).toBeInTheDocument()
        expect(getByTestId("output").innerHTML).toBe("test1  test2")
        expect(mock).toHaveBeenCalledTimes(1)

        // expect(baseElement).toBeInTheDocument()

    })
})