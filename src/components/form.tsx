import Button from "./Button";
import '../App.css';
import { useState } from "react";
export default function Form()
{
    const [first,setFirst]=useState<number>(0);
    const [second,setSecond]=useState<number>(0);
    
    

    return(
        <div>
            <input type='number' placeholder="number1" value={first} onChange={e=>{
                setFirst(parseInt(e.target.value));
            }}/>
            <input type='number' placeholder="number2" value={second} onChange={e=>
            {
                setSecond(parseInt(e.target.value))
            }}/>
            <Button text='Add' class="addButton"></Button>
            <Button text='Sub' class="subButton"></Button>
            <label>result</label>
            
        </div>
    )

}